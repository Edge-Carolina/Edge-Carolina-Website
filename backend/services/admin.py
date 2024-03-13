from fastapi import Depends
from sqlalchemy.orm import Session
from ..database import db_session
from ..entities.admin_entity import AdminEntity
from ..models.admin_data import AdminData
from .exceptions import (
    ResourceNotFoundException,
    AdminPermissionException,
    AdminRegistrationException,
)

class AdminService:
    """Backend service that enables direct modification of admin data."""

    def __init__(self, session: Session = Depends(db_session)):
        """Initializes the 'AdminService` session"""
        self._session = session

    def get_admins(self) -> list[AdminData]:
        """Retrieves all admins."""
        query_result = self._session.query(AdminEntity).all()
        return [admin_entity.to_model() for admin_entity in query_result]

    def get_admin(self, admin_id: int) -> AdminData:
        """Gets one admin by an ID."""
        admin_entity = self._session.query(AdminEntity).filter(AdminEntity.id == admin_id).first()
        if admin_entity is None:
            raise ResourceNotFoundException("admin does not exist.")
        return admin_entity.to_model()

    def create_admin(self, admin: AdminData) -> AdminData:
        """Stores a admin in the database."""
        existing_email = self._session.query(AdminEntity).filter(AdminEntity.email == admin.email).first()
        if existing_email:
            raise AdminRegistrationException()

        new_admin = AdminEntity.from_model(admin)
        self._session.add(new_admin)
        self._session.commit()
        return new_admin.to_model()

    def update_admin(self, admin: AdminData) -> AdminData:
        """Modifies one admin in the database."""
        admin_entity = self._session.query(AdminEntity).filter(AdminEntity.id == admin.id).first()
        if admin_entity is None:
            raise ResourceNotFoundException("admin does not exist.")

        admin_entity.first_name = admin.first_name
        admin_entity.last_name = admin.last_name
        admin_entity.email = admin.email
        self._session.commit()
        return admin_entity.to_model()

    def delete_admin(self, admin_id: int) -> None:
        """Deletes one admin from the database."""
        admin_entity = self._session.query(AdminEntity).filter(AdminEntity.id == admin_id).first()
        if admin_entity is None:
            raise ResourceNotFoundException("admin does not exist.")

        self._session.delete(admin_entity)
        self._session.commit()

    def check_email_registered(self, email: str) -> bool:
        """Checks if an email is already registered."""
        existing_email = self._session.query(AdminEntity).filter(AdminEntity.email == email).first()
        return existing_email is not None
