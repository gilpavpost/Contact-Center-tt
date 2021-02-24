# Cоздание базы

CREATE DATABASE contactdb
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Russian_Russia.1251'
    LC_CTYPE = 'Russian_Russia.1251'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

# Создание таблицы

CREATE TABLE public.table1
(
    "Id" integer NOT NULL DEFAULT nextval('"table1_Id_seq"'::regclass),
    "One" text COLLATE pg_catalog."default",
    "Two" text COLLATE pg_catalog."default",
    "Date" date NOT NULL,
    CONSTRAINT table1_pkey PRIMARY KEY ("Id")
)

TABLESPACE pg_default;

ALTER TABLE public.table1
    OWNER to postgres;

# Пример добавления данных
INSERT INTO "table" ("One", "Two", "Date" )
VALUES  ( 'This example' , 'string of characters','2021-02-24');