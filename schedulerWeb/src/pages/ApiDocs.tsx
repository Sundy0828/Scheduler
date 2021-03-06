import React from 'react'
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import doc from './ApiDocs.json'
interface ApiDocsProps {

}

export const ApiDocs: React.FC<ApiDocsProps> = ({}) => {
    return (
        <SwaggerUI spec='{
            "swagger": "2.0",
            "info": {
              "description": "The Scheduler API connects users to institutions. This allows students to get a mock school course list, and when to take their courses. Faculty is also able to create and modify courses.",
              "version": "1.0.0",
              "title": "Scheduler",
              "termsOfService": "http://swagger.io/terms/",
              "contact": {
                "email": "info@scheduler.com"
              },
              "license": {
                "name": "Apache 2.0",
                "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
              }
            },
            "host": "localhost:3000",
            "basePath": "/dev",
            "tags": [
              {
                "name": "Institution",
                "description": "Everything about your Institutions"
              },
              {
                "name": "Capability",
                "description": "Everything about your Capabilities"
              },
              {
                "name": "Semester",
                "description": "Everything about your Semesters"
              },
              {
                "name": "User",
                "description": "Everything about your Users"
              },
              {
                "name": "UserType",
                "description": "Everything about your UserTypes"
              },
              {
                "name": "Year",
                "description": "Everything about your Years"
              }
            ],
            "schemes": [
              "http"
            ],
            "securityDefinitions": {
              "JWT": {
                "type": "apiKey",
                "in": "header",
                "name": "access_token"
              }
            },
            "paths": {
              "/Institution": {
                "post": {
                  "security": [
                    {
                      "JWT": []
                    }
                  ],
                  "tags": [
                    "Institution"
                  ],
                  "summary": "Create a new institution",
                  "description": "",
                  "operationId": "addInstitution",
                  "consumes": [
                    "application/json"
                  ],
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [
                    {
                      "in": "body",
                      "name": "body",
                      "description": "Institution object that needs to be added to the store",
                      "required": true,
                      "schema": {
                        "$ref": "#/definitions/Institution"
                      }
                    }
                  ],
                  "responses": {
                    "200": {
                      "description": "Information on institution creation.",
                      "schema": {
                        "type": "object",
                        "properties": {
                          "success": {
                            "type": "boolean",
                            "description": "This is an optional boolean value indicating the success or failure of the request."
                          },
                          "msg": {
                            "type": "string",
                            "description": "This is an optional message describing additional details of the results of the request."
                          },
                          "count": {
                            "type": "integer",
                            "description": "The count of the number of records returned."
                          },
                          "data": {
                            "type": "array",
                            "description": "List of institution data.",
                            "items": {
                              "$ref": "#/definitions/Institution"
                            }
                          }
                        }
                      }
                    },
                    "400": {
                      "description": "Invalid ID supplied"
                    },
                    "404": {
                      "description": "Institution not found"
                    }
                  }
                },
                "get": {
                  "security": [
                    {
                      "JWT": []
                    }
                  ],
                  "tags": [
                    "Institution"
                  ],
                  "summary": "Get all institutions",
                  "description": "",
                  "operationId": "updateInstitution",
                  "consumes": [
                    "application/json"
                  ],
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [],
                  "responses": {
                    "200": {
                      "description": "Information on institution retrievals.",
                      "schema": {
                        "type": "object",
                        "properties": {
                          "success": {
                            "type": "boolean",
                            "description": "This is an optional boolean value indicating the success or failure of the request."
                          },
                          "msg": {
                            "type": "string",
                            "description": "This is an optional message describing additional details of the results of the request."
                          },
                          "count": {
                            "type": "integer",
                            "description": "The count of the number of records returned."
                          },
                          "data": {
                            "type": "array",
                            "description": "List of institution data.",
                            "items": {
                              "$ref": "#/definitions/Institution"
                            }
                          }
                        }
                      }
                    },
                    "400": {
                      "description": "Invalid ID supplied"
                    },
                    "404": {
                      "description": "Institution not found"
                    }
                  }
                }
              },
              "/Institution/{id}": {
                "get": {
                  "security": [
                    {
                      "JWT": []
                    }
                  ],
                  "tags": [
                    "Institution"
                  ],
                  "summary": "Find institution by ID",
                  "description": "Returns a single institution",
                  "operationId": "getInstitutionById",
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [
                    {
                      "name": "id",
                      "in": "path",
                      "description": "ID of institution to return",
                      "required": true,
                      "type": "integer",
                      "format": "int64"
                    }
                  ],
                  "responses": {
                    "200": {
                      "description": "Information on institution retrieval.",
                      "schema": {
                        "type": "object",
                        "properties": {
                          "success": {
                            "type": "boolean",
                            "description": "This is an optional boolean value indicating the success or failure of the request."
                          },
                          "msg": {
                            "type": "string",
                            "description": "This is an optional message describing additional details of the results of the request."
                          },
                          "count": {
                            "type": "integer",
                            "description": "The count of the number of records returned."
                          },
                          "data": {
                            "type": "array",
                            "description": "Specific institution data.",
                            "items": {
                              "$ref": "#/definitions/Institution"
                            }
                          }
                        }
                      }
                    },
                    "400": {
                      "description": "Invalid ID supplied"
                    },
                    "404": {
                      "description": "Institution not found"
                    }
                  }
                },
                "put": {
                  "security": [
                    {
                      "JWT": []
                    }
                  ],
                  "tags": [
                    "Institution"
                  ],
                  "summary": "Updates a institution in the store with form data",
                  "description": "",
                  "operationId": "updateInstitutionWithForm",
                  "consumes": [
                    "application/x-www-form-urlencoded"
                  ],
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [
                    {
                      "name": "id",
                      "in": "path",
                      "description": "ID of institution that needs to be updated",
                      "required": true,
                      "type": "integer",
                      "format": "int64"
                    },
                    {
                      "name": "name",
                      "in": "formData",
                      "description": "Updated name of the institution",
                      "required": false,
                      "type": "string"
                    }
                  ],
                  "responses": {
                    "200": {
                      "description": "Information on institution update.",
                      "schema": {
                        "type": "object",
                        "properties": {
                          "success": {
                            "type": "boolean",
                            "description": "This is an optional boolean value indicating the success or failure of the request."
                          },
                          "msg": {
                            "type": "string",
                            "description": "This is an optional message describing additional details of the results of the request."
                          }
                        }
                      }
                    },
                    "400": {
                      "description": "Invalid ID supplied"
                    },
                    "404": {
                      "description": "Institution not found"
                    }
                  }
                },
                "delete": {
                  "security": [
                    {
                      "JWT": []
                    }
                  ],
                  "tags": [
                    "Institution"
                  ],
                  "summary": "Deletes a institution",
                  "description": "",
                  "operationId": "deleteInstitution",
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [
                    {
                      "name": "id",
                      "in": "path",
                      "description": "Institution id to delete",
                      "required": true,
                      "type": "integer",
                      "format": "int64"
                    }
                  ],
                  "responses": {
                    "200": {
                      "description": "Information on institution deletion.",
                      "schema": {
                        "type": "object",
                        "properties": {
                          "success": {
                            "type": "boolean",
                            "description": "This is an optional boolean value indicating the success or failure of the request."
                          },
                          "msg": {
                            "type": "string",
                            "description": "This is an optional message describing additional details of the results of the request."
                          }
                        }
                      }
                    },
                    "400": {
                      "description": "Invalid ID supplied"
                    },
                    "404": {
                      "description": "Institution not found"
                    }
                  }
                }
              },
              "/Capability": {
                "post": {
                  "security": [
                    {
                      "JWT": []
                    }
                  ],
                  "tags": [
                    "Capability"
                  ],
                  "summary": "Create a new capability",
                  "description": "",
                  "operationId": "addCapability",
                  "consumes": [
                    "application/json"
                  ],
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [
                    {
                      "in": "body",
                      "name": "body",
                      "description": "Capability object that needs to be added to the store",
                      "required": true,
                      "schema": {
                        "$ref": "#/definitions/Capability"
                      }
                    }
                  ],
                  "responses": {
                    "200": {
                      "description": "Information on capability creation.",
                      "schema": {
                        "type": "object",
                        "properties": {
                          "success": {
                            "type": "boolean",
                            "description": "This is an optional boolean value indicating the success or failure of the request."
                          },
                          "msg": {
                            "type": "string",
                            "description": "This is an optional message describing additional details of the results of the request."
                          },
                          "count": {
                            "type": "integer",
                            "description": "The count of the number of records returned."
                          },
                          "data": {
                            "type": "array",
                            "description": "List of capability data.",
                            "items": {
                              "$ref": "#/definitions/Capability"
                            }
                          }
                        }
                      }
                    },
                    "400": {
                      "description": "Invalid ID supplied"
                    },
                    "404": {
                      "description": "Capability not found"
                    }
                  }
                },
                "get": {
                  "security": [
                    {
                      "JWT": []
                    }
                  ],
                  "tags": [
                    "Capability"
                  ],
                  "summary": "Get all capabilitys",
                  "description": "",
                  "operationId": "updateCapability",
                  "consumes": [
                    "application/json"
                  ],
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [],
                  "responses": {
                    "200": {
                      "description": "Information on capability retrievals.",
                      "schema": {
                        "type": "object",
                        "properties": {
                          "success": {
                            "type": "boolean",
                            "description": "This is an optional boolean value indicating the success or failure of the request."
                          },
                          "msg": {
                            "type": "string",
                            "description": "This is an optional message describing additional details of the results of the request."
                          },
                          "count": {
                            "type": "integer",
                            "description": "The count of the number of records returned."
                          },
                          "data": {
                            "type": "array",
                            "description": "List of capability data.",
                            "items": {
                              "$ref": "#/definitions/Capability"
                            }
                          }
                        }
                      }
                    },
                    "400": {
                      "description": "Invalid ID supplied"
                    },
                    "404": {
                      "description": "Capability not found"
                    }
                  }
                }
              },
              "/Capability/{id}": {
                "get": {
                  "security": [
                    {
                      "JWT": []
                    }
                  ],
                  "tags": [
                    "Capability"
                  ],
                  "summary": "Find capability by ID",
                  "description": "Returns a single capability",
                  "operationId": "getCapabilityById",
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [
                    {
                      "name": "id",
                      "in": "path",
                      "description": "ID of capability to return",
                      "required": true,
                      "type": "integer",
                      "format": "int64"
                    }
                  ],
                  "responses": {
                    "200": {
                      "description": "Information on capability retrieval.",
                      "schema": {
                        "type": "object",
                        "properties": {
                          "success": {
                            "type": "boolean",
                            "description": "This is an optional boolean value indicating the success or failure of the request."
                          },
                          "msg": {
                            "type": "string",
                            "description": "This is an optional message describing additional details of the results of the request."
                          },
                          "count": {
                            "type": "integer",
                            "description": "The count of the number of records returned."
                          },
                          "data": {
                            "type": "array",
                            "description": "Specific capability data.",
                            "items": {
                              "$ref": "#/definitions/Capability"
                            }
                          }
                        }
                      }
                    },
                    "400": {
                      "description": "Invalid ID supplied"
                    },
                    "404": {
                      "description": "Capability not found"
                    }
                  }
                },
                "put": {
                  "security": [
                    {
                      "JWT": []
                    }
                  ],
                  "tags": [
                    "Capability"
                  ],
                  "summary": "Updates a capability in the store with form data",
                  "description": "",
                  "operationId": "updateCapabilityWithForm",
                  "consumes": [
                    "application/x-www-form-urlencoded"
                  ],
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [
                    {
                      "name": "id",
                      "in": "path",
                      "description": "ID of capability that needs to be updated",
                      "required": true,
                      "type": "integer",
                      "format": "int64"
                    },
                    {
                      "name": "name",
                      "in": "formData",
                      "description": "Updated name of the capability",
                      "required": false,
                      "type": "string"
                    }
                  ],
                  "responses": {
                    "200": {
                      "description": "Information on capability update.",
                      "schema": {
                        "type": "object",
                        "properties": {
                          "success": {
                            "type": "boolean",
                            "description": "This is an optional boolean value indicating the success or failure of the request."
                          },
                          "msg": {
                            "type": "string",
                            "description": "This is an optional message describing additional details of the results of the request."
                          }
                        }
                      }
                    },
                    "400": {
                      "description": "Invalid ID supplied"
                    },
                    "404": {
                      "description": "Capability not found"
                    }
                  }
                },
                "delete": {
                  "security": [
                    {
                      "JWT": []
                    }
                  ],
                  "tags": [
                    "Capability"
                  ],
                  "summary": "Deletes a capability",
                  "description": "",
                  "operationId": "deleteCapability",
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [
                    {
                      "name": "id",
                      "in": "path",
                      "description": "Capability id to delete",
                      "required": true,
                      "type": "integer",
                      "format": "int64"
                    }
                  ],
                  "responses": {
                    "200": {
                      "description": "Information on capability deletion.",
                      "schema": {
                        "type": "object",
                        "properties": {
                          "success": {
                            "type": "boolean",
                            "description": "This is an optional boolean value indicating the success or failure of the request."
                          },
                          "msg": {
                            "type": "string",
                            "description": "This is an optional message describing additional details of the results of the request."
                          }
                        }
                      }
                    },
                    "400": {
                      "description": "Invalid ID supplied"
                    },
                    "404": {
                      "description": "Capability not found"
                    }
                  }
                }
              },
              "/Semester": {
                "post": {
                  "security": [
                    {
                      "JWT": []
                    }
                  ],
                  "tags": [
                    "Semester"
                  ],
                  "summary": "Create a new semester",
                  "description": "",
                  "operationId": "addSemester",
                  "consumes": [
                    "application/json"
                  ],
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [
                    {
                      "in": "body",
                      "name": "body",
                      "description": "Semester object that needs to be added to the store",
                      "required": true,
                      "schema": {
                        "$ref": "#/definitions/Semester"
                      }
                    }
                  ],
                  "responses": {
                    "200": {
                      "description": "Information on semester creation.",
                      "schema": {
                        "type": "object",
                        "properties": {
                          "success": {
                            "type": "boolean",
                            "description": "This is an optional boolean value indicating the success or failure of the request."
                          },
                          "msg": {
                            "type": "string",
                            "description": "This is an optional message describing additional details of the results of the request."
                          },
                          "count": {
                            "type": "integer",
                            "description": "The count of the number of records returned."
                          },
                          "data": {
                            "type": "array",
                            "description": "List of semester data.",
                            "items": {
                              "$ref": "#/definitions/Semester"
                            }
                          }
                        }
                      }
                    },
                    "400": {
                      "description": "Invalid ID supplied"
                    },
                    "404": {
                      "description": "Semester not found"
                    }
                  }
                },
                "get": {
                  "security": [
                    {
                      "JWT": []
                    }
                  ],
                  "tags": [
                    "Semester"
                  ],
                  "summary": "Get all semesters",
                  "description": "",
                  "operationId": "updateSemester",
                  "consumes": [
                    "application/json"
                  ],
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [],
                  "responses": {
                    "200": {
                      "description": "Information on semester retrievals.",
                      "schema": {
                        "type": "object",
                        "properties": {
                          "success": {
                            "type": "boolean",
                            "description": "This is an optional boolean value indicating the success or failure of the request."
                          },
                          "msg": {
                            "type": "string",
                            "description": "This is an optional message describing additional details of the results of the request."
                          },
                          "count": {
                            "type": "integer",
                            "description": "The count of the number of records returned."
                          },
                          "data": {
                            "type": "array",
                            "description": "List of semester data.",
                            "items": {
                              "$ref": "#/definitions/Semester"
                            }
                          }
                        }
                      }
                    },
                    "400": {
                      "description": "Invalid ID supplied"
                    },
                    "404": {
                      "description": "Semester not found"
                    }
                  }
                }
              },
              "/Semester/{id}": {
                "get": {
                  "security": [
                    {
                      "JWT": []
                    }
                  ],
                  "tags": [
                    "Semester"
                  ],
                  "summary": "Find semester by ID",
                  "description": "Returns a single semester",
                  "operationId": "getSemesterById",
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [
                    {
                      "name": "id",
                      "in": "path",
                      "description": "ID of semester to return",
                      "required": true,
                      "type": "integer",
                      "format": "int64"
                    }
                  ],
                  "responses": {
                    "200": {
                      "description": "Information on semester retrieval.",
                      "schema": {
                        "type": "object",
                        "properties": {
                          "success": {
                            "type": "boolean",
                            "description": "This is an optional boolean value indicating the success or failure of the request."
                          },
                          "msg": {
                            "type": "string",
                            "description": "This is an optional message describing additional details of the results of the request."
                          },
                          "count": {
                            "type": "integer",
                            "description": "The count of the number of records returned."
                          },
                          "data": {
                            "type": "array",
                            "description": "Specific semester data.",
                            "items": {
                              "$ref": "#/definitions/Semester"
                            }
                          }
                        }
                      }
                    },
                    "400": {
                      "description": "Invalid ID supplied"
                    },
                    "404": {
                      "description": "Semester not found"
                    }
                  }
                },
                "put": {
                  "security": [
                    {
                      "JWT": []
                    }
                  ],
                  "tags": [
                    "Semester"
                  ],
                  "summary": "Updates a semester in the store with form data",
                  "description": "",
                  "operationId": "updateSemesterWithForm",
                  "consumes": [
                    "application/x-www-form-urlencoded"
                  ],
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [
                    {
                      "name": "id",
                      "in": "path",
                      "description": "ID of semester that needs to be updated",
                      "required": true,
                      "type": "integer",
                      "format": "int64"
                    },
                    {
                      "name": "name",
                      "in": "formData",
                      "description": "Updated name of the semester",
                      "required": false,
                      "type": "string"
                    }
                  ],
                  "responses": {
                    "200": {
                      "description": "Information on semester update.",
                      "schema": {
                        "type": "object",
                        "properties": {
                          "success": {
                            "type": "boolean",
                            "description": "This is an optional boolean value indicating the success or failure of the request."
                          },
                          "msg": {
                            "type": "string",
                            "description": "This is an optional message describing additional details of the results of the request."
                          }
                        }
                      }
                    },
                    "400": {
                      "description": "Invalid ID supplied"
                    },
                    "404": {
                      "description": "Semester not found"
                    }
                  }
                },
                "delete": {
                  "security": [
                    {
                      "JWT": []
                    }
                  ],
                  "tags": [
                    "Semester"
                  ],
                  "summary": "Deletes a semester",
                  "description": "",
                  "operationId": "deleteSemester",
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [
                    {
                      "name": "id",
                      "in": "path",
                      "description": "Semester id to delete",
                      "required": true,
                      "type": "integer",
                      "format": "int64"
                    }
                  ],
                  "responses": {
                    "200": {
                      "description": "Information on semester deletion.",
                      "schema": {
                        "type": "object",
                        "properties": {
                          "success": {
                            "type": "boolean",
                            "description": "This is an optional boolean value indicating the success or failure of the request."
                          },
                          "msg": {
                            "type": "string",
                            "description": "This is an optional message describing additional details of the results of the request."
                          }
                        }
                      }
                    },
                    "400": {
                      "description": "Invalid ID supplied"
                    },
                    "404": {
                      "description": "Semester not found"
                    }
                  }
                }
              },
              "/Login": {
                "post": {
                  "tags": [
                    "User"
                  ],
                  "summary": "Login as user",
                  "description": "",
                  "operationId": "loginUser",
                  "consumes": [
                    "application/json"
                  ],
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [
                    {
                      "in": "body",
                      "name": "body",
                      "description": "User object that needs to be added to the store",
                      "required": true,
                      "schema": {
                        "$ref": "#/definitions/Login"
                      }
                    }
                  ],
                  "responses": {
                    "200": {
                      "description": "Information on user creation.",
                      "schema": {
                        "type": "object",
                        "properties": {
                          "success": {
                            "type": "boolean",
                            "description": "This is an optional boolean value indicating the success or failure of the request."
                          },
                          "msg": {
                            "type": "string",
                            "description": "This is an optional message describing additional details of the results of the request."
                          },
                          "count": {
                            "type": "integer",
                            "description": "The count of the number of records returned."
                          },
                          "data": {
                            "type": "array",
                            "description": "List of user data.",
                            "items": {
                              "$ref": "#/definitions/User"
                            }
                          }
                        }
                      }
                    },
                    "400": {
                      "description": "Invalid ID supplied"
                    },
                    "404": {
                      "description": "User not found"
                    }
                  }
                }
              },
              "/User": {
                "post": {
                  "security": [
                    {
                      "JWT": []
                    }
                  ],
                  "tags": [
                    "User"
                  ],
                  "summary": "Create a new user",
                  "description": "",
                  "operationId": "addUser",
                  "consumes": [
                    "application/json"
                  ],
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [
                    {
                      "in": "body",
                      "name": "body",
                      "description": "User object that needs to be added to the store",
                      "required": true,
                      "schema": {
                        "$ref": "#/definitions/User"
                      }
                    }
                  ],
                  "responses": {
                    "200": {
                      "description": "Information on user creation.",
                      "schema": {
                        "type": "object",
                        "properties": {
                          "success": {
                            "type": "boolean",
                            "description": "This is an optional boolean value indicating the success or failure of the request."
                          },
                          "msg": {
                            "type": "string",
                            "description": "This is an optional message describing additional details of the results of the request."
                          },
                          "count": {
                            "type": "integer",
                            "description": "The count of the number of records returned."
                          },
                          "data": {
                            "type": "array",
                            "description": "List of user data.",
                            "items": {
                              "$ref": "#/definitions/User"
                            }
                          }
                        }
                      }
                    },
                    "400": {
                      "description": "Invalid ID supplied"
                    },
                    "404": {
                      "description": "User not found"
                    }
                  }
                },
                "get": {
                  "security": [
                    {
                      "JWT": []
                    }
                  ],
                  "tags": [
                    "User"
                  ],
                  "summary": "Get all users",
                  "description": "",
                  "operationId": "updateUser",
                  "consumes": [
                    "application/json"
                  ],
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [],
                  "responses": {
                    "200": {
                      "description": "Information on user retrievals.",
                      "schema": {
                        "type": "object",
                        "properties": {
                          "success": {
                            "type": "boolean",
                            "description": "This is an optional boolean value indicating the success or failure of the request."
                          },
                          "msg": {
                            "type": "string",
                            "description": "This is an optional message describing additional details of the results of the request."
                          },
                          "count": {
                            "type": "integer",
                            "description": "The count of the number of records returned."
                          },
                          "data": {
                            "type": "array",
                            "description": "List of user data.",
                            "items": {
                              "$ref": "#/definitions/User"
                            }
                          }
                        }
                      }
                    },
                    "400": {
                      "description": "Invalid ID supplied"
                    },
                    "404": {
                      "description": "User not found"
                    }
                  }
                }
              },
              "/User/{id}": {
                "get": {
                  "security": [
                    {
                      "JWT": []
                    }
                  ],
                  "tags": [
                    "User"
                  ],
                  "summary": "Find user by ID",
                  "description": "Returns a single user",
                  "operationId": "getUserById",
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [
                    {
                      "name": "id",
                      "in": "path",
                      "description": "ID of user to return",
                      "required": true,
                      "type": "integer",
                      "format": "int64"
                    }
                  ],
                  "responses": {
                    "200": {
                      "description": "Information on user retrieval.",
                      "schema": {
                        "type": "object",
                        "properties": {
                          "success": {
                            "type": "boolean",
                            "description": "This is an optional boolean value indicating the success or failure of the request."
                          },
                          "msg": {
                            "type": "string",
                            "description": "This is an optional message describing additional details of the results of the request."
                          },
                          "count": {
                            "type": "integer",
                            "description": "The count of the number of records returned."
                          },
                          "data": {
                            "type": "array",
                            "description": "Specific user data.",
                            "items": {
                              "$ref": "#/definitions/User"
                            }
                          }
                        }
                      }
                    },
                    "400": {
                      "description": "Invalid ID supplied"
                    },
                    "404": {
                      "description": "User not found"
                    }
                  }
                },
                "put": {
                  "security": [
                    {
                      "JWT": []
                    }
                  ],
                  "tags": [
                    "User"
                  ],
                  "summary": "Updates a user in the store with form data",
                  "description": "",
                  "operationId": "updateUserWithForm",
                  "consumes": [
                    "application/x-www-form-urlencoded"
                  ],
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [
                    {
                      "name": "id",
                      "in": "path",
                      "description": "ID of user that needs to be updated",
                      "required": true,
                      "type": "integer",
                      "format": "int64"
                    },
                    {
                      "name": "name",
                      "in": "formData",
                      "description": "Updated name of the user",
                      "required": false,
                      "type": "string"
                    }
                  ],
                  "responses": {
                    "200": {
                      "description": "Information on user update.",
                      "schema": {
                        "type": "object",
                        "properties": {
                          "success": {
                            "type": "boolean",
                            "description": "This is an optional boolean value indicating the success or failure of the request."
                          },
                          "msg": {
                            "type": "string",
                            "description": "This is an optional message describing additional details of the results of the request."
                          }
                        }
                      }
                    },
                    "400": {
                      "description": "Invalid ID supplied"
                    },
                    "404": {
                      "description": "User not found"
                    }
                  }
                },
                "delete": {
                  "security": [
                    {
                      "JWT": []
                    }
                  ],
                  "tags": [
                    "User"
                  ],
                  "summary": "Deletes a user",
                  "description": "",
                  "operationId": "deleteUser",
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [
                    {
                      "name": "id",
                      "in": "path",
                      "description": "User id to delete",
                      "required": true,
                      "type": "integer",
                      "format": "int64"
                    }
                  ],
                  "responses": {
                    "200": {
                      "description": "Information on user deletion.",
                      "schema": {
                        "type": "object",
                        "properties": {
                          "success": {
                            "type": "boolean",
                            "description": "This is an optional boolean value indicating the success or failure of the request."
                          },
                          "msg": {
                            "type": "string",
                            "description": "This is an optional message describing additional details of the results of the request."
                          }
                        }
                      }
                    },
                    "400": {
                      "description": "Invalid ID supplied"
                    },
                    "404": {
                      "description": "User not found"
                    }
                  }
                }
              },
              "/UserType": {
                "post": {
                  "security": [
                    {
                      "JWT": []
                    }
                  ],
                  "tags": [
                    "UserType"
                  ],
                  "summary": "Create a new user type",
                  "description": "",
                  "operationId": "addUserType",
                  "consumes": [
                    "application/json"
                  ],
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [
                    {
                      "in": "body",
                      "name": "body",
                      "description": "UserType object that needs to be added to the store",
                      "required": true,
                      "schema": {
                        "$ref": "#/definitions/UserType"
                      }
                    }
                  ],
                  "responses": {
                    "200": {
                      "description": "Information on user type creation.",
                      "schema": {
                        "type": "object",
                        "properties": {
                          "success": {
                            "type": "boolean",
                            "description": "This is an optional boolean value indicating the success or failure of the request."
                          },
                          "msg": {
                            "type": "string",
                            "description": "This is an optional message describing additional details of the results of the request."
                          },
                          "count": {
                            "type": "integer",
                            "description": "The count of the number of records returned."
                          },
                          "data": {
                            "type": "array",
                            "description": "List of user type data.",
                            "items": {
                              "$ref": "#/definitions/UserType"
                            }
                          }
                        }
                      }
                    },
                    "400": {
                      "description": "Invalid ID supplied"
                    },
                    "404": {
                      "description": "UserType not found"
                    }
                  }
                },
                "get": {
                  "security": [
                    {
                      "JWT": []
                    }
                  ],
                  "tags": [
                    "UserType"
                  ],
                  "summary": "Get all user types",
                  "description": "",
                  "operationId": "updateUserType",
                  "consumes": [
                    "application/json"
                  ],
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [],
                  "responses": {
                    "200": {
                      "description": "Information on user type retrievals.",
                      "schema": {
                        "type": "object",
                        "properties": {
                          "success": {
                            "type": "boolean",
                            "description": "This is an optional boolean value indicating the success or failure of the request."
                          },
                          "msg": {
                            "type": "string",
                            "description": "This is an optional message describing additional details of the results of the request."
                          },
                          "count": {
                            "type": "integer",
                            "description": "The count of the number of records returned."
                          },
                          "data": {
                            "type": "array",
                            "description": "List of user type data.",
                            "items": {
                              "$ref": "#/definitions/UserType"
                            }
                          }
                        }
                      }
                    },
                    "400": {
                      "description": "Invalid ID supplied"
                    },
                    "404": {
                      "description": "UserType not found"
                    }
                  }
                }
              },
              "/UserType/{id}": {
                "get": {
                  "security": [
                    {
                      "JWT": []
                    }
                  ],
                  "tags": [
                    "UserType"
                  ],
                  "summary": "Find user type by ID",
                  "description": "Returns a single user type",
                  "operationId": "getUserTypeById",
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [
                    {
                      "name": "id",
                      "in": "path",
                      "description": "ID of user type to return",
                      "required": true,
                      "type": "integer",
                      "format": "int64"
                    }
                  ],
                  "responses": {
                    "200": {
                      "description": "Information on user type retrieval.",
                      "schema": {
                        "type": "object",
                        "properties": {
                          "success": {
                            "type": "boolean",
                            "description": "This is an optional boolean value indicating the success or failure of the request."
                          },
                          "msg": {
                            "type": "string",
                            "description": "This is an optional message describing additional details of the results of the request."
                          },
                          "count": {
                            "type": "integer",
                            "description": "The count of the number of records returned."
                          },
                          "data": {
                            "type": "array",
                            "description": "Specific user type data.",
                            "items": {
                              "$ref": "#/definitions/UserType"
                            }
                          }
                        }
                      }
                    },
                    "400": {
                      "description": "Invalid ID supplied"
                    },
                    "404": {
                      "description": "UserType not found"
                    }
                  }
                },
                "put": {
                  "security": [
                    {
                      "JWT": []
                    }
                  ],
                  "tags": [
                    "UserType"
                  ],
                  "summary": "Updates a user type in the store with form data",
                  "description": "",
                  "operationId": "updateUserTypeWithForm",
                  "consumes": [
                    "application/x-www-form-urlencoded"
                  ],
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [
                    {
                      "name": "id",
                      "in": "path",
                      "description": "ID of user type that needs to be updated",
                      "required": true,
                      "type": "integer",
                      "format": "int64"
                    },
                    {
                      "name": "name",
                      "in": "formData",
                      "description": "Updated name of the user type",
                      "required": false,
                      "type": "string"
                    }
                  ],
                  "responses": {
                    "200": {
                      "description": "Information on user type update.",
                      "schema": {
                        "type": "object",
                        "properties": {
                          "success": {
                            "type": "boolean",
                            "description": "This is an optional boolean value indicating the success or failure of the request."
                          },
                          "msg": {
                            "type": "string",
                            "description": "This is an optional message describing additional details of the results of the request."
                          }
                        }
                      }
                    },
                    "400": {
                      "description": "Invalid ID supplied"
                    },
                    "404": {
                      "description": "UserType not found"
                    }
                  }
                },
                "delete": {
                  "security": [
                    {
                      "JWT": []
                    }
                  ],
                  "tags": [
                    "UserType"
                  ],
                  "summary": "Deletes a user type",
                  "description": "",
                  "operationId": "deleteUserType",
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [
                    {
                      "name": "id",
                      "in": "path",
                      "description": "UserType id to delete",
                      "required": true,
                      "type": "integer",
                      "format": "int64"
                    }
                  ],
                  "responses": {
                    "200": {
                      "description": "Information on user type deletion.",
                      "schema": {
                        "type": "object",
                        "properties": {
                          "success": {
                            "type": "boolean",
                            "description": "This is an optional boolean value indicating the success or failure of the request."
                          },
                          "msg": {
                            "type": "string",
                            "description": "This is an optional message describing additional details of the results of the request."
                          }
                        }
                      }
                    },
                    "400": {
                      "description": "Invalid ID supplied"
                    },
                    "404": {
                      "description": "UserType not found"
                    }
                  }
                }
              },
              "/Year": {
                "post": {
                  "security": [
                    {
                      "JWT": []
                    }
                  ],
                  "tags": [
                    "Year"
                  ],
                  "summary": "Create a new year",
                  "description": "",
                  "operationId": "addYear",
                  "consumes": [
                    "application/json"
                  ],
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [
                    {
                      "in": "body",
                      "name": "body",
                      "description": "Year object that needs to be added to the store",
                      "required": true,
                      "schema": {
                        "$ref": "#/definitions/Year"
                      }
                    }
                  ],
                  "responses": {
                    "200": {
                      "description": "Information on year creation.",
                      "schema": {
                        "type": "object",
                        "properties": {
                          "success": {
                            "type": "boolean",
                            "description": "This is an optional boolean value indicating the success or failure of the request."
                          },
                          "msg": {
                            "type": "string",
                            "description": "This is an optional message describing additional details of the results of the request."
                          },
                          "count": {
                            "type": "integer",
                            "description": "The count of the number of records returned."
                          },
                          "data": {
                            "type": "array",
                            "description": "List of year data.",
                            "items": {
                              "$ref": "#/definitions/Year"
                            }
                          }
                        }
                      }
                    },
                    "400": {
                      "description": "Invalid ID supplied"
                    },
                    "404": {
                      "description": "Year not found"
                    }
                  }
                },
                "get": {
                  "security": [
                    {
                      "JWT": []
                    }
                  ],
                  "tags": [
                    "Year"
                  ],
                  "summary": "Get all years",
                  "description": "",
                  "operationId": "updateYear",
                  "consumes": [
                    "application/json"
                  ],
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [],
                  "responses": {
                    "200": {
                      "description": "Information on year retrievals.",
                      "schema": {
                        "type": "object",
                        "properties": {
                          "success": {
                            "type": "boolean",
                            "description": "This is an optional boolean value indicating the success or failure of the request."
                          },
                          "msg": {
                            "type": "string",
                            "description": "This is an optional message describing additional details of the results of the request."
                          },
                          "count": {
                            "type": "integer",
                            "description": "The count of the number of records returned."
                          },
                          "data": {
                            "type": "array",
                            "description": "List of year data.",
                            "items": {
                              "$ref": "#/definitions/Year"
                            }
                          }
                        }
                      }
                    },
                    "400": {
                      "description": "Invalid ID supplied"
                    },
                    "404": {
                      "description": "Year not found"
                    }
                  }
                }
              },
              "/Year/{id}": {
                "get": {
                  "security": [
                    {
                      "JWT": []
                    }
                  ],
                  "tags": [
                    "Year"
                  ],
                  "summary": "Find year by ID",
                  "description": "Returns a single year",
                  "operationId": "getYearById",
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [
                    {
                      "name": "id",
                      "in": "path",
                      "description": "ID of year to return",
                      "required": true,
                      "type": "integer",
                      "format": "int64"
                    }
                  ],
                  "responses": {
                    "200": {
                      "description": "Information on year retrieval.",
                      "schema": {
                        "type": "object",
                        "properties": {
                          "success": {
                            "type": "boolean",
                            "description": "This is an optional boolean value indicating the success or failure of the request."
                          },
                          "msg": {
                            "type": "string",
                            "description": "This is an optional message describing additional details of the results of the request."
                          },
                          "count": {
                            "type": "integer",
                            "description": "The count of the number of records returned."
                          },
                          "data": {
                            "type": "array",
                            "description": "Specific year data.",
                            "items": {
                              "$ref": "#/definitions/Year"
                            }
                          }
                        }
                      }
                    },
                    "400": {
                      "description": "Invalid ID supplied"
                    },
                    "404": {
                      "description": "Year not found"
                    }
                  }
                },
                "put": {
                  "security": [
                    {
                      "JWT": []
                    }
                  ],
                  "tags": [
                    "Year"
                  ],
                  "summary": "Updates a year in the store with form data",
                  "description": "",
                  "operationId": "updateYearWithForm",
                  "consumes": [
                    "application/x-www-form-urlencoded"
                  ],
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [
                    {
                      "name": "id",
                      "in": "path",
                      "description": "ID of year that needs to be updated",
                      "required": true,
                      "type": "integer",
                      "format": "int64"
                    },
                    {
                      "name": "name",
                      "in": "formData",
                      "description": "Updated name of the year",
                      "required": false,
                      "type": "string"
                    }
                  ],
                  "responses": {
                    "200": {
                      "description": "Information on year update.",
                      "schema": {
                        "type": "object",
                        "properties": {
                          "success": {
                            "type": "boolean",
                            "description": "This is an optional boolean value indicating the success or failure of the request."
                          },
                          "msg": {
                            "type": "string",
                            "description": "This is an optional message describing additional details of the results of the request."
                          }
                        }
                      }
                    },
                    "400": {
                      "description": "Invalid ID supplied"
                    },
                    "404": {
                      "description": "Year not found"
                    }
                  }
                },
                "delete": {
                  "security": [
                    {
                      "JWT": []
                    }
                  ],
                  "tags": [
                    "Year"
                  ],
                  "summary": "Deletes a year",
                  "description": "",
                  "operationId": "deleteYear",
                  "produces": [
                    "application/json"
                  ],
                  "parameters": [
                    {
                      "name": "id",
                      "in": "path",
                      "description": "Year id to delete",
                      "required": true,
                      "type": "integer",
                      "format": "int64"
                    }
                  ],
                  "responses": {
                    "200": {
                      "description": "Information on year deletion.",
                      "schema": {
                        "type": "object",
                        "properties": {
                          "success": {
                            "type": "boolean",
                            "description": "This is an optional boolean value indicating the success or failure of the request."
                          },
                          "msg": {
                            "type": "string",
                            "description": "This is an optional message describing additional details of the results of the request."
                          }
                        }
                      }
                    },
                    "400": {
                      "description": "Invalid ID supplied"
                    },
                    "404": {
                      "description": "Year not found"
                    }
                  }
                }
              }
            },
            "definitions": {
              "Institution": {
                "type": "object",
                "required": [
                  "name"
                ],
                "properties": {
                  "id": {
                    "type": "integer",
                    "format": "int64"
                  },
                  "name": {
                    "type": "string",
                    "example": "Carnegie Mellon University"
                  }
                },
                "xml": {
                  "name": "Institution"
                }
              },
              "Capability": {
                "type": "object",
                "required": [
                  "name"
                ],
                "properties": {
                  "id": {
                    "type": "integer",
                    "format": "int64"
                  },
                  "name": {
                    "type": "string",
                    "example": "CRUD"
                  }
                },
                "xml": {
                  "name": "Capability"
                }
              },
              "Semester": {
                "type": "object",
                "required": [
                  "name"
                ],
                "properties": {
                  "id": {
                    "type": "integer",
                    "format": "int64"
                  },
                  "name": {
                    "type": "string",
                    "example": "Fall"
                  }
                },
                "xml": {
                  "name": "Semester"
                }
              },
              "User": {
                "type": "object",
                "required": [
                  "name",
                  "email",
                  "password",
                  "userTypeId"
                ],
                "properties": {
                  "id": {
                    "type": "integer",
                    "format": "int64"
                  },
                  "name": {
                    "type": "object",
                    "properties": {
                      "firstName": {
                        "type": "string"
                      },
                      "lastName": {
                        "type": "string"
                      }
                    }
                  },
                  "email": {
                    "type": "string",
                    "example": "user@gmail.com"
                  },
                  "password": {
                    "type": "string",
                    "example": "hashed"
                  },
                  "salt": {
                    "type": "string",
                    "example": "salt"
                  },
                  "user_meta": {
                    "type": "object",
                    "properties": {
                      "address": {
                        "type": "string"
                      },
                      "address2": {
                        "type": "string"
                      },
                      "city": {
                        "type": "string"
                      },
                      "state": {
                        "type": "string"
                      },
                      "zip": {
                        "type": "string"
                      },
                      "phone": {
                        "type": "string"
                      }
                    }
                  },
                  "first_failed_login": {
                    "type": "string",
                    "example": "date"
                  },
                  "login_attempts": {
                    "type": "integer",
                    "example": "0"
                  },
                  "timeout_start": {
                    "type": "string",
                    "example": "date"
                  },
                  "user_type_id": {
                    "type": "integer",
                    "example": "1"
                  },
                  "user_key": {
                    "type": "string",
                    "example": "UUID"
                  }
                },
                "xml": {
                  "name": "User"
                }
              },
              "UserType": {
                "type": "object",
                "required": [
                  "name"
                ],
                "properties": {
                  "id": {
                    "type": "integer",
                    "format": "int64"
                  },
                  "name": {
                    "type": "string",
                    "example": "Admin"
                  }
                },
                "xml": {
                  "name": "UserType"
                }
              },
              "Year": {
                "type": "object",
                "required": [
                  "name"
                ],
                "properties": {
                  "id": {
                    "type": "integer",
                    "format": "int64"
                  },
                  "name": {
                    "type": "string",
                    "example": "Odd"
                  }
                },
                "xml": {
                  "name": "Year"
                }
              },
              "Login": {
                "type": "object",
                "required": [
                  "name"
                ],
                "properties": {
                  "username": {
                    "type": "string",
                    "example": "email"
                  },
                  "password": {
                    "type": "string",
                    "example": "password"
                  }
                },
                "xml": {
                  "name": "Login"
                }
              },
              "ApiResponse": {
                "type": "object",
                "properties": {
                  "code": {
                    "type": "integer",
                    "format": "int32"
                  },
                  "type": {
                    "type": "string"
                  },
                  "message": {
                    "type": "string"
                  }
                }
              }
            }
          }' />
    );
}