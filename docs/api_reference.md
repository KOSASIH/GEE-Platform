# GEE-Platform API Reference

Welcome to the GEE-Platform API Reference! This guide will help you get started with using the GEE-Platform API to manage your Geospatial data and workflows.

## Table of Contents

1. [Introduction](#introduction)
2. [Authentication](#authentication)
3. [Data Management](#data-management)
4. [Workflows](#workflows)
5. [Error Handling](#error-handling)

## Introduction

The GEE-Platform API is a RESTful API that allows you to manage your Geospatial data and workflows programmatically. The API is organized around the following endpoints:

- Data Management: `/api/data/`
- Workflows: `/api/workflows/`

## Authentication

To use the GEE-Platform API, you'll need to authenticate your requests using an API key. You can generate an API key from the GEE-Platform web interface. Once you have an API key, you can include it in your requests using the `Authorization` header:

`Authorization: Token <your-api-key>`


## Data Management

The GEE-Platform API allows you to manage your Geospatial data using the following endpoints:

- List data: `GET /api/data/`
- Get data: `GET /api/data/{id}/`
- Create data: `POST /api/data/`
- Update data: `PUT /api/data/{id}/`
- Delete data: `DELETE /api/data/{id}/`

### List Data

To list all the data in your account, send a `GET` request to `/api/data/`. The response will include a list of data objects, each with the following fields:

- `id`: The unique identifier for the data.
- `name`: The name of the data.
- `description`: A description of the data.
- `format`: The format of the data.
- `size`: The size of the data in bytes.
- `created_at`: The date and time the data was created.
- `updated_at`: The date and time the data was last updated.

### Get Data

To get a specific data object, send a `GET` request to `/api/data/{id}/`, where `{id}` is the unique identifier for the data. The response will include the data object with all its fields.

### Create Data

To create a new data object, send a `POST` request to `/api/data/`. The request should include the following fields in the request body:

- `name`: The name of the data.
- `description`: A description of the data.
- `format`: The format of the data.
- `file`: The file to upload.

The response will include the newly created data object with its unique identifier.

### Update Data

To update an existing data object, send a `PUT` request to `/api/data/{id}/`, where `{id}` is the unique identifier for the data. The request should include the fields to update in the request body.

### Delete Data

To delete a data object, send a `DELETE` request to `/api/data/{id}/`, where `{id}` is the unique identifier for the data.

## Workflows

The GEE-Platform API allows you to manage your workflows using the following endpoints:

- List workflows: `GET /api/workflows/`
- Get workflow: `GET /api/workflows/{id}/`
- Create workflow: `POST /api/workflows/`
- Update workflow: `PUT /api/workflows/{id}/`
- Delete workflow: `DELETE /api/workflows/{id}/`

### List Workflows

To list all the workflows in your account, send a `GET` request to `/api/workflows/`. The response will include a list of workflow objects, each with the following fields:

- `id`: The unique identifier for the workflow.
- `name`: The name of the workflow.
- `description`: A description of the workflow.
- `created_at`: The date and time the workflow was created.
- `updated_at`: The date and time the workflow was last updated.

### Get Workflow

To get a specific workflow object, send a `GET` request to `/api/workflows/{id}/`, where `{id}` is the unique identifier for the workflow. The response will include the workflow object with all its fields.

### Create Workflow

To create a new workflow object, send a `POST` request to `/api/workflows/`. The request should include the following fields in the request body:

- `name`: The name of the workflow.
- `description`: A description of the workflow.
- `steps`: A list of steps in the workflow.

The response will include the newly created workflow object with its unique identifier.

### Update Workflow

To update an existing workflow object, send a `PUT` request to `/api/workflows/{id}/`, where `{id}` is the unique identifier for the workflow. The request should include the fields to update in the request body.

### Delete Workflow

To delete a workflow object, senda `DELETE` request to `/api/workflows/{id}/`, where `{id}` is the unique identifier for the workflow.

## Error Handling

The GEE-Platform API uses standard HTTP status codes to indicate the success or failure of a request. The following status codes are used:

- `200 OK`: The request was successful.
- `201 Created`: The request was successful and a new resource was created.
- `400 Bad Request`: The request was invalid or malformed.
- `401 Unauthorized`: The request required authentication but it was not provided.
- `403 Forbidden`: The request was valid but the user is not authorized to access the resource.
- `404 Not Found`: The requested resource could not be found.
- `500 Internal Server Error`: An unexpected error occurred on the server.

In addition to the status code, the API may return a JSON object with an `error` field that provides more information about the error.
