FROM python:3.12-bullseye

WORKDIR /opt/app

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN pip install --no-cache-dir poetry
COPY backend/pyproject.toml backend/poetry.lock ./

RUN  mkdir -p /opt/app/static/ \
     && mkdir -p /opt/app/media/ \
     && poetry config virtualenvs.create false \
     && poetry install --no-interaction --no-ansi

COPY ./backend/src .

ENTRYPOINT gunicorn main:app --workers 4 --worker-class uvicorn.workers.UvicornWorker --bind "$FASTAPI_HOST":"$FASTAPI_PORT"