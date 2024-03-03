"""Productivity API

Productivity routes are used to create, retrieve, and update Pomodoro timers."""

from fastapi import APIRouter, Depends

from backend.models.user_data import UserData
from ..services.join import JoinService


api = APIRouter(prefix="/api/join")
openapi_tags = {
    "name": "Join",
    "description": "Create, update, delete, and retrieve user data.",
}


# GET /api/join
# Gets all users.
# Expected return type: list[UserData]
@api.get("", response_model=list[UserData], tags=["Join"])
def get_timers(
    join_service: JoinService = Depends(),
) -> list[UserData]:
    """
    Get all users.

    Parameters:
        join_service: a valid JoinService

    Returns:
        list[UserData]: All users
    """

    # Return all users
    return join_service.get_timers()


# GET /api/join/{id}
# Get a user by its ID.
# Expected return type: UserData
@api.get("/{id}", response_model=UserData, tags=["Join"])
def get_timer(
    id: int,
    join_service: JoinService = Depends(),
) -> UserData:
    """
    Get user.

    Parameters:
        id: ID of the user to get
        join_service: a valid JoinService
    """

    return join_service.get_timer(id)


# POST /api/join/
# Creates a new user.
# Expected return type: UserData
@api.post("", response_model=UserData, tags=["Join"])
def create_timer(
    user: UserData,
    join_service: JoinService = Depends(),
) -> UserData:
    """
    Create user.

    Parameters:
        user: a valid user model
        join_service: a valid JoinService

    Returns:
        User: Created user
    """

    return join_service.create_timer(user)


# PUT /api/join
# Updates a user.
# Expected return type: UserData
@api.put("", response_model=UserData, tags=["Join"])
def update_timer(
    user: UserData,
    join_service: JoinService = Depends(),
) -> UserData:
    """
    Update user.

    Parameters:
        user: a valid UserData model
        user_service: a valid JoinService

    Returns:
        UserData: Updated user
    """

    return join_service.update_timer(user)


# DELETE /api/productivity/{id}
# Deletes a user.
# Expected return type: UserData
@api.delete("/{id}", response_model=None, tags=["Join"])
def delete_timer(
    id: int,
    join_service: JoinService = Depends(),
) -> UserData:
    """
    Delete user.

    Parameters:
        id: ID of the user to delete
        join_service: a valid JoinService
    """

    return join_service.delete_timer(id)
