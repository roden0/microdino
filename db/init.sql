
GRANT ALL PRIVILEGES ON DATABASE deno_beers TO deno;

CREATE TABLE IF NOT EXISTS beers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    brand VARCHAR(50) NOT NULL,
    is_premium BOOLEAN,
    registration_date TIMESTAMP
);
