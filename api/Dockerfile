FROM python:3.9-slim-buster as builder

WORKDIR /opt/app

RUN pip3 install poetry
COPY poetry.lock pyproject.toml poetry.toml ./
RUN poetry install --no-dev

FROM python:3.9-slim-buster as runner
RUN apt-get update \
    && apt-get install -y libpq5 libxml2 \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN useradd -r -s /bin/false uvicornuser
WORKDIR /opt/app
COPY --from=builder /opt/app/.venv /opt/app/.venv
COPY example_server ./example_server
USER uvicornuser

EXPOSE 8000
CMD ["/opt/app/.venv/bin/gunicorn", "-w", "1", "-k", "uvicorn.workers.UvicornWorker", "--capture-output", "--log-level", "warning", "--access-logfile", "-", "--bind", ":8000", "example_server.main:app"]
