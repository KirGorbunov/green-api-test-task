from fastapi import FastAPI, HTTPException
import requests
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class MessageData(BaseModel):
    chatId: str
    message: str

@app.get("/{idInstance}/{method}/{apiTokenInstance}")
async def account(idInstance: str, method: str, apiTokenInstance: str):
    api_url = f"https://1103.api.green-api.com/waInstance{idInstance}/{method}/{apiTokenInstance}"

    try:
        response = requests.get(api_url)
        response.raise_for_status()
        data = response.json()
        return data
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=500, detail=f"Ошибка при запросе к внешнему API: {str(e)}")

@app.post("/{idInstance}/SendMessage/{apiTokenInstance}")
async def send_message(idInstance: str, apiTokenInstance: str, msg_data: MessageData):
    api_url = f"https://1103.api.green-api.com/waInstance{idInstance}/SendMessage/{apiTokenInstance}"

    try:
        response = requests.post(api_url, json=msg_data.model_dump())
        response.raise_for_status()
        data = response.json()
        return data
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=500, detail=f"Ошибка при отправке сообщения: {str(e)}")


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=3000)
