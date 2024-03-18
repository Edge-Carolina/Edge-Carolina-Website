from pydantic import BaseModel

class AdminCreate(BaseModel):
    first_name: str
    last_name: str
    email: str
    password: str
