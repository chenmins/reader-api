#!/usr/bin/env bash
unzip reader.zip
unzip node_modules.zip
docker build -t harbor.chenmin.org/books/books-reader:latest .
docker push harbor.chenmin.org/books/books-reader:latest
