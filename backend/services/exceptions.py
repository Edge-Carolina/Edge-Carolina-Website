"""
This file contains exceptions found in the service layer.

These custom exceptions can then be handled peoperly
at the API level.
"""


class ResourceNotFoundException(Exception):
    """ResourceNotFoundException is raised when a user attempts to access a resource that does not exist."""

    ...


class UserPermissionException(Exception):
    """UserPermissionException is raised when a user attempts to perform an action they are not authorized to perform."""

    def __init__(self, action: str, resource: str):
        super().__init__(f"Not authorized to perform `{action}` on `{resource}`")


class UserRegistrationException(Exception):
    """UserRegistrationException is raised when a user attempts to register and cannot (i.e., when the email already exists)."""

    def __init__(self):
        super().__init__(f"Unable to register user, email is already registered.")

class ProductRegistrationException(Exception):
    """ProductRegistrationException is raised when a product is registered and cannot (i.e., when the url already exists)."""

    def __init__(self):
        super().__init__(f"Unable to register product, url is already registered.")
