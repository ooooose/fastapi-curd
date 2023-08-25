up:
	docker-compose up -d

build:
	docker-compose build

down:
	docker-compose down

logs:
	docker-compose logs -f api

ps:
	docker-compose ps

migrate:
	docker-compose exec api poetry run python -m migrate_db
