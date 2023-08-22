up:
	docker-compose up -d

down:
	docker-compose down

logs:
	docker-compose logs api

ps:
	docker-compose ps

migrate:
	docker-compose exec api poetry run python -m api.migrate_db
