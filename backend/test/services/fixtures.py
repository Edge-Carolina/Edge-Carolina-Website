from typing import Generator
import pytest
from sqlalchemy.orm import Session
from ...services import (
    ProductService
)


__authors__ = ["Weston Voglesonger"]
__copyright__ = "Copyright 2023"
__license__ = "MIT"

@pytest.fixture()
def join_service(session: Session):
    """Fixture to provide an instance of JoinService with a mock session."""
    return JoinService(session=session)


@pytest.fixture()
def product_service(session: Session):
    """Fixture to provide an instance of JoinService with a mock session."""
    return ProductService(session=session)

