declare const AddTrackedWallet: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly wallet: {
                readonly type: "string";
                readonly description: "The address of the wallet to be tracked";
            };
            readonly label: {
                readonly type: "string";
                readonly description: "A label for the tracked wallet";
            };
            readonly list_id: {
                readonly type: "integer";
                readonly description: "The ID of the list to add the wallet to";
            };
        };
        readonly required: readonly ["wallet", "label"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly description: "The response schema for the /api/v1/tracked-wallets endpoint.";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the standard response status object, which indicates the success or failure of the API request.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "number";
                            readonly description: "The unique identifier for the tracked wallet.";
                            readonly examples: readonly [1];
                        };
                        readonly wallet: {
                            readonly type: "string";
                            readonly description: "The wallet address for which the related wallets are provided.";
                            readonly examples: readonly ["0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2"];
                        };
                        readonly label: {
                            readonly type: "string";
                            readonly description: "The label for the related wallet.";
                            readonly examples: readonly ["Wallet Name"];
                        };
                        readonly type: {
                            readonly type: "object";
                            readonly description: "Enumerates the different types of wallets.\n\n`unknown` `evm` `solana` `dydx` `bitcoin`";
                            readonly enum: readonly ["unknown", "evm", "solana", "dydx", "bitcoin"];
                            readonly additionalProperties: true;
                        };
                        readonly list_id: {
                            readonly type: "number";
                            readonly description: "The list id for the tracked wallet.";
                            readonly examples: readonly [1];
                        };
                        readonly list: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "integer";
                                };
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly created_at: {
                                    readonly type: "integer";
                                };
                                readonly bot_id: {
                                    readonly type: "integer";
                                };
                                readonly description: {
                                    readonly type: "string";
                                };
                                readonly is_public: {
                                    readonly type: "boolean";
                                };
                                readonly followed_count: {
                                    readonly type: "integer";
                                };
                                readonly wallets_count: {
                                    readonly type: "integer";
                                };
                                readonly share_url: {
                                    readonly type: "string";
                                };
                                readonly image_url: {
                                    readonly type: "string";
                                };
                                readonly followed: {
                                    readonly type: "boolean";
                                };
                                readonly is_creator: {
                                    readonly type: "boolean";
                                };
                            };
                            readonly required: readonly ["name", "created_at", "bot_id", "description", "is_public", "followed_count", "wallets_count", "share_url", "image_url", "followed", "is_creator"];
                        };
                    };
                    readonly required: readonly ["id", "wallet", "label", "type"];
                };
            };
            readonly required: readonly ["status", "data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AddUserList: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
            };
            readonly is_public: {
                readonly type: "boolean";
            };
            readonly wallets: {
                readonly type: "array";
                readonly items: {
                    readonly type: "integer";
                };
            };
            readonly followed_list_id: {
                readonly type: "integer";
            };
            readonly description: {
                readonly type: "string";
            };
        };
        readonly required: readonly ["name"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly description: "The response schema for the /api/v1/lists endpoint.";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the standard response status object, which indicates the success or failure of the API request.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "integer";
                        };
                        readonly name: {
                            readonly type: "string";
                        };
                        readonly created_at: {
                            readonly type: "integer";
                        };
                        readonly bot_id: {
                            readonly type: "integer";
                        };
                        readonly description: {
                            readonly type: "string";
                        };
                        readonly is_public: {
                            readonly type: "boolean";
                        };
                        readonly followed_count: {
                            readonly type: "integer";
                        };
                        readonly wallets_count: {
                            readonly type: "integer";
                        };
                        readonly share_url: {
                            readonly type: "string";
                        };
                        readonly image_url: {
                            readonly type: "string";
                        };
                        readonly followed: {
                            readonly type: "boolean";
                        };
                        readonly is_creator: {
                            readonly type: "boolean";
                        };
                    };
                    readonly required: readonly ["name", "created_at", "bot_id", "description", "is_public", "followed_count", "wallets_count", "share_url", "image_url", "followed", "is_creator"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message accompanying the response, often used to provide additional information or context about the results or the status of the request.";
                };
            };
            readonly required: readonly ["status", "data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteUserList: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly list_id: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the list to update";
                };
            };
            readonly required: readonly ["list_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly delete_wallets: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Delete wallets in the list";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly description: "The response schema for the /api/v1/lists/{list_id} endpoint.";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the standard response status object, which indicates the success or failure of the API request.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message accompanying the response, often used to provide additional information or context about the results or the status of the request.";
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetAllLists: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly follow_only: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter lists by followed status.";
                };
                readonly order: {
                    readonly type: "string";
                    readonly enum: readonly ["popular", "new"];
                    readonly examples: readonly ["popular"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Order lists by creation date.";
                };
                readonly next_object: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Next page for pagination.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly description: "The response schema for the /api/v1/lists/all endpoint.";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the standard response status object, which indicates the success or failure of the API request.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "Contains the main data of the response.";
                    readonly properties: {
                        readonly lists: {
                            readonly type: "array";
                            readonly description: "An array of all lists.";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "integer";
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                    };
                                    readonly created_at: {
                                        readonly type: "integer";
                                    };
                                    readonly bot_id: {
                                        readonly type: "integer";
                                    };
                                    readonly description: {
                                        readonly type: "string";
                                    };
                                    readonly is_public: {
                                        readonly type: "boolean";
                                    };
                                    readonly followed_count: {
                                        readonly type: "integer";
                                    };
                                    readonly wallets_count: {
                                        readonly type: "integer";
                                    };
                                    readonly share_url: {
                                        readonly type: "string";
                                    };
                                    readonly image_url: {
                                        readonly type: "string";
                                    };
                                    readonly followed: {
                                        readonly type: "boolean";
                                    };
                                    readonly is_creator: {
                                        readonly type: "boolean";
                                    };
                                };
                                readonly required: readonly ["name", "created_at", "bot_id", "description", "is_public", "followed_count", "wallets_count", "share_url", "image_url", "followed", "is_creator"];
                            };
                        };
                        readonly Paging: {
                            readonly type: "object";
                            readonly properties: {
                                readonly total_rows_in_page: {
                                    readonly type: "integer";
                                };
                                readonly has_next_page: {
                                    readonly type: "boolean";
                                };
                                readonly next_object: {
                                    readonly type: "string";
                                };
                            };
                            readonly required: readonly ["total_rows_in_page", "has_next_page", "next_object"];
                        };
                    };
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message accompanying the response, often used to provide additional information or context about the results or the status of the request.";
                };
            };
            readonly required: readonly ["status", "data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetFeed: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly wallet: {
                    readonly type: "string";
                    readonly examples: readonly ["0x0f9d76acdbc4417b026f876be1e2042e45f3bcd2"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter the feed by a specific wallet address.";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly examples: readonly [10];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Limit the number of transactions returned in the feed. The maximum limit is 100.";
                };
                readonly list: {
                    readonly type: "integer";
                    readonly examples: readonly [1];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter transactions by a specific List ID.";
                };
                readonly chains: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly examples: readonly ["ethereum", "base", "arbitrum"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter transactions by specific blockchain chains (e.g. ethereum), comma-separated for multiple values (e.g, ethereum,polygon)";
                };
                readonly txTypes: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["bridge", "contract_creation", "contract_interaction", "flashloan", "lending", "lp", "nft_lending", "nft_liquidation", "nft_mint", "nft_sweep", "nft_trade", "nft_transfer", "option", "perp", "reward", "staking", "sudo_pool", "swap", "transfer", "wrap"];
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter transactions by types (e.g. swap, nft_trade), comma-separated for multiple values (e.g, swap,transfer,nft_trade)";
                };
                readonly tokens: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter transactions by specific tokens, identified by either their address or symbol , comma-separated for multiple values (e.g, LINK,BITCOIN)";
                };
                readonly minUSD: {
                    readonly type: "number";
                    readonly examples: readonly [100];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set a minimum USD value for transactions. Default - 0";
                };
                readonly newTrades: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter transactions by new trades.";
                };
                readonly startFrom: {
                    readonly type: "string";
                    readonly examples: readonly ["NjUyZDFlOTZjYTU1MTNjM2M0NzAyMjk5XzE2OTc0NTU3NjM"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set value from response 'paging.next_object_id' to get next page.";
                };
                readonly fromTimestamp: {
                    readonly type: "integer";
                    readonly examples: readonly [1630000000000];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter transactions from a specific UNIX timestamp.";
                };
                readonly toTimestamp: {
                    readonly type: "integer";
                    readonly examples: readonly [1630000000000];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter transactions to a specific UNIX timestamp.";
                };
                readonly includeMarketCap: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Include market capitalization of tokens in the response. Note that enabling this option will double the cost per request to 10 credits.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly description: "The response schema for the /v1/feed endpoint.";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the standard response status object, which indicates the success or failure of the API request.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "Contains the main data of the response, including a list of transaction items and pagination details.";
                    readonly properties: {
                        readonly items: {
                            readonly type: "array";
                            readonly description: "An array of transaction items, each conforming to one of several types like Swap, LP, Transfer, Lending, etc. This array can contain a mix of these types.";
                            readonly items: {
                                readonly oneOf: readonly [{
                                    readonly type: "object";
                                    readonly description: "This object type provides detailed information about a cryptocurrency swap transaction. It includes critical details such as wallet addresses, transaction hash, type of swap, blockchain specifics, and timestamps. The structure outlines the specifics of the assets involved in the swap, including their addresses, names, symbols, amounts, and USD values. It is particularly useful for platforms tracking and analyzing DeFi swap transactions, offering insights into the trade's details, such as the decentralized exchange (DEX) used, the tokens exchanged, and their respective values. This comprehensive structure is ideal for users or systems needing a detailed view of swap transactions on blockchain networks.\n";
                                    readonly properties: {
                                        readonly wallet: {
                                            readonly type: "string";
                                            readonly description: "The wallet address that initiated the swap transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly wallet_label: {
                                            readonly type: "string";
                                            readonly description: "A readable label for the wallet address.";
                                            readonly examples: readonly ["0xa4c8...f9457d"];
                                        };
                                        readonly tx_hash: {
                                            readonly type: "string";
                                            readonly description: "The unique hash identifier of the swap transaction.";
                                            readonly examples: readonly ["0xe0f84917036e7e2ebb2f8d73199547bde30d4d2918c67904a4bb200dc5bad215"];
                                        };
                                        readonly tx_type: {
                                            readonly type: "string";
                                            readonly description: "Specifies the type of transaction, in this case, a token swap.";
                                            readonly examples: readonly ["swap"];
                                        };
                                        readonly chain: {
                                            readonly type: "string";
                                            readonly description: "The blockchain network where the swap transaction occurred.";
                                            readonly examples: readonly ["optimism"];
                                        };
                                        readonly index: {
                                            readonly type: "integer";
                                            readonly description: "A numerical index or identifier for the transaction.";
                                            readonly examples: readonly [10];
                                        };
                                        readonly timestamp: {
                                            readonly type: "integer";
                                            readonly description: "The timestamp marking when the transaction was executed.";
                                            readonly examples: readonly [1702899395];
                                        };
                                        readonly block: {
                                            readonly type: "integer";
                                            readonly description: "The block number on the blockchain where this transaction is recorded.";
                                            readonly examples: readonly [113650309];
                                        };
                                        readonly dex: {
                                            readonly type: "string";
                                            readonly description: "The decentralized exchange where the swap transaction took place.";
                                            readonly examples: readonly ["Odos"];
                                        };
                                        readonly from: {
                                            readonly type: "string";
                                            readonly description: "The originating wallet address of the transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly to: {
                                            readonly type: "string";
                                            readonly description: "The destination wallet address of the transaction (often the same as the 'from' address in swap transactions).";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly token0_address: {
                                            readonly type: "string";
                                            readonly description: "The address of the first token involved in the swap.";
                                            readonly examples: readonly ["0x7f5c764cbc14f9669b88837ca1490cca17c31607"];
                                        };
                                        readonly token0_amount: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The amount of the first token involved in the swap.";
                                            readonly examples: readonly [25];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly token0_amount_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The USD value of the first token amount at the time of the swap.";
                                            readonly examples: readonly [25];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly token0_name: {
                                            readonly type: "string";
                                            readonly description: "The name of the first token involved in the swap.";
                                            readonly examples: readonly ["USD Coin"];
                                        };
                                        readonly token0_price_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The price of the first token in USD.";
                                            readonly examples: readonly [1];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly token0_symbol: {
                                            readonly type: "string";
                                            readonly description: "The symbol of the first token involved in the swap.";
                                            readonly examples: readonly ["USDC"];
                                        };
                                        readonly token0_icon_link: {
                                            readonly type: "string";
                                            readonly description: "A link to the icon of the token involved in the transaction.";
                                            readonly examples: readonly ["https://logos.uniwhales.io/ethereum/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.jpg"];
                                        };
                                        readonly token1_address: {
                                            readonly type: "string";
                                            readonly description: "The address of the second token involved in the swap.";
                                            readonly examples: readonly ["0x0000000000000000000000000000000000000000"];
                                        };
                                        readonly token1_amount: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The amount of the second token involved in the swap.";
                                            readonly examples: readonly [0.011715203954716423];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly token1_amount_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The USD value of the second token amount at the time of the swap.";
                                            readonly examples: readonly [25];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly token1_name: {
                                            readonly type: "string";
                                            readonly description: "The name of the second token involved in the swap.";
                                            readonly examples: readonly ["Ethereum"];
                                        };
                                        readonly token1_price_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The price of the second token in USD.";
                                            readonly examples: readonly [2133.979066573165];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly token1_symbol: {
                                            readonly type: "string";
                                            readonly description: "The symbol of the second token involved in the swap.";
                                            readonly examples: readonly ["ETH"];
                                        };
                                        readonly token1_icon_link: {
                                            readonly type: "string";
                                            readonly description: "A link to the icon of the token involved in the transaction.";
                                            readonly examples: readonly ["https://logos.uniwhales.io/ethereum/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.jpg"];
                                        };
                                        readonly first_interaction: {
                                            readonly type: "boolean";
                                            readonly description: "Indicates whether this transaction was the first interaction between the involved wallet addresses.";
                                            readonly examples: readonly ["falsed"];
                                        };
                                        readonly token_market_cap: {
                                            readonly type: "object";
                                            readonly description: "Contains the market capitalization and liquidity details of the tokens involved in the swap transaction.";
                                            readonly properties: {
                                                readonly token_address: {
                                                    readonly type: "string";
                                                    readonly description: "The address of the token.";
                                                    readonly examples: readonly ["0x7f5c764cbc14f9669b88837ca1490cca17c31607"];
                                                };
                                                readonly market_cap: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly description: "The market capitalization of the token.";
                                                    readonly examples: readonly [28567534.5964843];
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly liquidity: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly description: "The liquidity of the token.";
                                                    readonly examples: readonly [832322.8431867727];
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                            };
                                            readonly required: readonly ["token_address", "market_cap", "liquidity"];
                                        };
                                    };
                                    readonly required: readonly ["wallet", "wallet_label", "tx_hash", "tx_type", "chain", "index", "timestamp", "block", "dex", "from", "to", "token0_address", "token0_amount", "token0_amount_usd", "token0_name", "token0_price_usd", "token0_symbol", "token0_icon_link", "token1_address", "token1_amount", "token1_amount_usd", "token1_name", "token1_price_usd", "token1_symbol", "token1_icon_link", "first_interaction"];
                                }, {
                                    readonly type: "object";
                                    readonly description: "This object provides a comprehensive overview of a liquidity pool (LP) transaction on a decentralized exchange (DEX). It includes details about the wallet involved, the transaction hash, type, and associated blockchain, as well as specific information about the assets involved in the transaction. This structure is particularly useful for platforms that track and analyze liquidity pool actions, such as adding or removing liquidity, offering insights into the specifics of each action, including the assets involved, their amounts in both the native token and USD value, and their respective prices in USD.\n";
                                    readonly properties: {
                                        readonly wallet: {
                                            readonly type: "string";
                                            readonly description: "The wallet address participating in the LP transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly wallet_label: {
                                            readonly type: "string";
                                            readonly description: "A human-readable label or name associated with the wallet, such as a ENS name.";
                                            readonly examples: readonly ["vitalik.eth"];
                                        };
                                        readonly tx_hash: {
                                            readonly type: "string";
                                            readonly description: "The unique transaction hash identifying this specific LP transaction.";
                                            readonly examples: readonly ["0xe0f84917036e7e2ebb2f8d73199547bde30d4d2918c67904a4bb200dc5bad215"];
                                        };
                                        readonly tx_type: {
                                            readonly type: "string";
                                            readonly description: "Indicates the type of transaction, in this case, liquidity pool (LP) related.";
                                            readonly examples: readonly ["lp"];
                                        };
                                        readonly chain: {
                                            readonly type: "string";
                                            readonly description: "The blockchain network (e.g., Ethereum, Optimism) where this transaction takes place.";
                                            readonly examples: readonly ["optimism"];
                                        };
                                        readonly index: {
                                            readonly type: "integer";
                                            readonly description: "A numerical index or identifier for the transaction.";
                                            readonly examples: readonly [10];
                                        };
                                        readonly timestamp: {
                                            readonly type: "integer";
                                            readonly description: "The timestamp marking when the transaction was executed.";
                                            readonly examples: readonly [1702899395];
                                        };
                                        readonly block: {
                                            readonly type: "integer";
                                            readonly description: "The block number on the blockchain where this transaction is recorded.";
                                            readonly examples: readonly [113650309];
                                        };
                                        readonly dex: {
                                            readonly type: "string";
                                            readonly description: "The name of the decentralized exchange where the LP transaction occurred.";
                                            readonly examples: readonly ["Odos"];
                                        };
                                        readonly from: {
                                            readonly type: "string";
                                            readonly description: "The originating wallet address for the transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly type: {
                                            readonly type: "string";
                                            readonly description: "Specifies the nature of the LP transaction, such as 'add' or 'remove'.";
                                            readonly examples: readonly ["add"];
                                        };
                                        readonly token0_address: {
                                            readonly type: "string";
                                            readonly description: "The address of the first token involved in the LP transaction.";
                                            readonly examples: readonly ["0x7f5c764cbc14f9669b88837ca1490cca17c31607"];
                                        };
                                        readonly token0_amount: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The amount of the first token involved in the transaction.";
                                            readonly examples: readonly [25];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly token0_amount_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The USD value of the first token amount at the time of the transaction.";
                                            readonly examples: readonly [25];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly token0_name: {
                                            readonly type: "string";
                                            readonly description: "The name of the first token involved in the transaction.";
                                            readonly examples: readonly ["USD Coin"];
                                        };
                                        readonly token0_price_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The price of the first token in USD.";
                                            readonly examples: readonly [1];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly token0_symbol: {
                                            readonly type: "string";
                                            readonly description: "The symbol of the first token involved in the transaction.";
                                            readonly examples: readonly ["USDC"];
                                        };
                                        readonly token0_icon_link: {
                                            readonly type: "string";
                                            readonly description: "A link to the icon of the token involved in the transaction.";
                                            readonly examples: readonly ["https://logos.uniwhales.io/ethereum/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.jpg"];
                                        };
                                        readonly token1_address: {
                                            readonly type: "string";
                                            readonly description: "The address of the second token involved in the LP transaction.";
                                            readonly examples: readonly ["0x0000000000000000000000000000000000000000"];
                                        };
                                        readonly token1_amount: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The amount of the second token involved in the transaction.";
                                            readonly examples: readonly [25];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly token1_amount_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The USD value of the second token amount at the time of the transaction.";
                                            readonly examples: readonly [25];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly token1_name: {
                                            readonly type: "string";
                                            readonly description: "The name of the second token involved in the transaction.";
                                            readonly examples: readonly ["USD Coin"];
                                        };
                                        readonly token1_price_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The price of the second token in USD.";
                                            readonly examples: readonly [1];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly token1_symbol: {
                                            readonly type: "string";
                                            readonly description: "The symbol of the second token involved in the transaction.";
                                            readonly examples: readonly ["USDC"];
                                        };
                                        readonly token1_icon_link: {
                                            readonly type: "string";
                                            readonly description: "A link to the icon of the token involved in the transaction.";
                                            readonly examples: readonly ["https://logos.uniwhales.io/ethereum/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.jpg"];
                                        };
                                        readonly lower_bound: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "Indicates the lower bound of the price range for the LP position, relevant in certain types of liquidity pools.";
                                            readonly examples: readonly [0];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly upper_bound: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "Indicates the upper bound of the price range for the LP position, relevant in certain types of liquidity pools.";
                                            readonly examples: readonly [0];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                    };
                                    readonly required: readonly ["wallet", "wallet_label", "tx_hash", "tx_type", "chain", "index", "timestamp", "block", "dex", "from", "type", "token0_address", "token0_amount", "token0_amount_usd", "token0_name", "token0_price_usd", "token0_symbol", "token0_icon_link", "token1_address", "token1_amount", "token1_amount_usd", "token1_name", "token1_price_usd", "token1_symbol", "token1_icon_link", "lower_bound", "upper_bound"];
                                }, {
                                    readonly type: "object";
                                    readonly description: "This object represents the details of a cryptocurrency transfer transaction. It includes essential information such as wallet addresses, transaction hash, type of transfer, blockchain details, and timestamps. The structure is particularly useful for tracking standard token transfers on blockchain networks, providing a comprehensive overview of the transaction, including the amount transferred in USD, the token's contract address, its name, and symbol. This detailed structure is ideal for users or systems requiring a thorough view of token transfer transactions, including the specifics of the token involved and the value of the transaction.\n";
                                    readonly properties: {
                                        readonly wallet: {
                                            readonly type: "string";
                                            readonly description: "The wallet address involved in the transfer transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly wallet_label: {
                                            readonly type: "string";
                                            readonly description: "A readable label for the wallet address.";
                                            readonly examples: readonly ["0xa4c8...f9457d"];
                                        };
                                        readonly tx_hash: {
                                            readonly type: "string";
                                            readonly description: "The unique hash identifier of the transfer transaction.";
                                            readonly examples: readonly ["0xe0f84917036e7e2ebb2f8d73199547bde30d4d2918c67904a4bb200dc5bad215"];
                                        };
                                        readonly tx_type: {
                                            readonly type: "string";
                                            readonly description: "Specifies the type of transaction, in this case, a token transfer.";
                                            readonly examples: readonly ["transfer"];
                                        };
                                        readonly chain: {
                                            readonly type: "string";
                                            readonly description: "The blockchain network where the transfer transaction occurred.";
                                            readonly examples: readonly ["optimism"];
                                        };
                                        readonly index: {
                                            readonly type: "integer";
                                            readonly description: "A numerical index or identifier for the transaction.";
                                            readonly examples: readonly [10];
                                        };
                                        readonly timestamp: {
                                            readonly type: "integer";
                                            readonly description: "The timestamp marking when the transaction was executed.";
                                            readonly examples: readonly [1702899395];
                                        };
                                        readonly block: {
                                            readonly type: "integer";
                                            readonly description: "The block number on the blockchain where this transaction is recorded.";
                                            readonly examples: readonly [113650309];
                                        };
                                        readonly from: {
                                            readonly type: "string";
                                            readonly description: "The originating wallet address of the transaction.";
                                            readonly examples: readonly ["0xebc18d25d8122da21f73a6bcb78971671f21f6ff"];
                                        };
                                        readonly to: {
                                            readonly type: "string";
                                            readonly description: "The destination wallet address of the transaction.";
                                            readonly examples: readonly ["0xcfdbdb8723619bca23765e09d59c8f745366f8ff"];
                                        };
                                        readonly from_label: {
                                            readonly type: "string";
                                            readonly description: "A readable version of the 'from' wallet address.";
                                            readonly examples: readonly ["0xebc18d25d8122da21f73a6bcb78971671f21f6ff"];
                                        };
                                        readonly to_label: {
                                            readonly type: "string";
                                            readonly description: "A readable version of the 'to' wallet address.";
                                            readonly examples: readonly ["0xcfdb...6f8ff"];
                                        };
                                        readonly amount_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The USD value of the amount transferred in the transaction.";
                                            readonly examples: readonly [117.412291];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly contract_address: {
                                            readonly type: "string";
                                            readonly description: "The blockchain address of the contract under which the token is registered.";
                                            readonly examples: readonly ["0xdac17f958d2ee523a2206206994597c13d831ec7"];
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly description: "The name of the token being transferred.";
                                            readonly examples: readonly ["Tether USD"];
                                        };
                                        readonly symbol: {
                                            readonly type: "string";
                                            readonly description: "The symbol of the token being transferred.";
                                            readonly examples: readonly ["USDT"];
                                        };
                                        readonly token_price_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The price of the token in USD at the time of the transaction.";
                                            readonly examples: readonly [1];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly type: {
                                            readonly type: "string";
                                            readonly description: "Indicates the contract standard of the token, such as ERC20.";
                                            readonly examples: readonly ["ERC20"];
                                        };
                                        readonly token_icon_link: {
                                            readonly type: "string";
                                            readonly description: "A URL link to the token's icon image.";
                                            readonly examples: readonly ["https://logos.uniwhales.io/ethereum/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.jpg"];
                                        };
                                        readonly token_market_cap: {
                                            readonly type: "object";
                                            readonly description: "Contains the market capitalization and liquidity details of the tokens involved in the swap transaction.";
                                            readonly properties: {
                                                readonly token_address: {
                                                    readonly type: "string";
                                                    readonly description: "The address of the token.";
                                                    readonly examples: readonly ["0x7f5c764cbc14f9669b88837ca1490cca17c31607"];
                                                };
                                                readonly market_cap: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly description: "The market capitalization of the token.";
                                                    readonly examples: readonly [28567534.5964843];
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                                readonly liquidity: {
                                                    readonly type: "number";
                                                    readonly format: "double";
                                                    readonly description: "The liquidity of the token.";
                                                    readonly examples: readonly [832322.8431867727];
                                                    readonly minimum: -1.7976931348623157e+308;
                                                    readonly maximum: 1.7976931348623157e+308;
                                                };
                                            };
                                            readonly required: readonly ["token_address", "market_cap", "liquidity"];
                                        };
                                        readonly mempool: {
                                            readonly type: "boolean";
                                            readonly description: "For Bitcoin transactions, this field indicates whether the transaction is in the mempool.";
                                        };
                                    };
                                    readonly required: readonly ["wallet", "wallet_label", "tx_hash", "tx_type", "chain", "index", "timestamp", "block", "from", "to", "from_label", "to_label", "amount_usd", "contract_address", "name", "symbol", "token_price_usd", "type", "token_icon_link"];
                                }, {
                                    readonly type: "object";
                                    readonly description: "This object represents the data structure for a specific transaction related to decentralized finance (DeFi) activities such as lending, borrowing, and other related actions. It provides detailed information about the transaction, including wallet addresses, transaction hash, type of transaction, chain details, and financial figures. This structure is particularly useful for platforms tracking DeFi activities, offering insights into the specifics of each transaction, such as the asset involved, the amount, the health factor in lending platforms, and the price of the asset in USD at the time of the transaction.\n";
                                    readonly properties: {
                                        readonly wallet: {
                                            readonly type: "string";
                                            readonly description: "The wallet address associated with the transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly wallet_label: {
                                            readonly type: "string";
                                            readonly description: "A more readable, shortened version of the wallet address.";
                                            readonly examples: readonly ["0xa4c8...f9457d"];
                                        };
                                        readonly tx_hash: {
                                            readonly type: "string";
                                            readonly description: "The unique identifier of the transaction, represented as a hash.";
                                            readonly examples: readonly ["0xe0f84917036e7e2ebb2f8d73199547bde30d4d2918c67904a4bb200dc5bad215"];
                                        };
                                        readonly tx_type: {
                                            readonly type: "string";
                                            readonly description: "Specifies the type of DeFi transaction, such as lending, borrowing, etc.";
                                            readonly examples: readonly ["lending"];
                                        };
                                        readonly chain: {
                                            readonly type: "string";
                                            readonly description: "Indicates the blockchain network on which the transaction occurred.";
                                            readonly examples: readonly ["base"];
                                        };
                                        readonly index: {
                                            readonly type: "integer";
                                            readonly description: "A sequential index or identifier for the transaction within a particular dataset or list.";
                                            readonly examples: readonly [10];
                                        };
                                        readonly timestamp: {
                                            readonly type: "integer";
                                            readonly description: "The timestamp marking when the transaction was executed.";
                                            readonly examples: readonly [1702899395];
                                        };
                                        readonly block: {
                                            readonly type: "integer";
                                            readonly description: "The block number in the blockchain where this transaction is recorded.";
                                            readonly examples: readonly [113650309];
                                        };
                                        readonly from: {
                                            readonly type: "string";
                                            readonly description: "The originating wallet address for the transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly from_label: {
                                            readonly type: "string";
                                            readonly description: "A readable, abbreviated form of the 'from' wallet address.";
                                            readonly examples: readonly ["0xa4c8...f9457d"];
                                        };
                                        readonly action: {
                                            readonly type: "string";
                                            readonly description: "Describes the action taken in the transaction, such as 'Repaid' in a lending scenario.";
                                            readonly examples: readonly ["Repaid"];
                                        };
                                        readonly address: {
                                            readonly type: "string";
                                            readonly description: "The smart contract address involved in the transaction.";
                                            readonly examples: readonly ["0x4200000000000000000000000000000000000006"];
                                        };
                                        readonly amount: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The amount of the asset involved in the transaction.";
                                            readonly examples: readonly [50.007801987424834];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly amount_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The equivalent value of the transaction amount in USD.";
                                            readonly examples: readonly [106652.63945462069];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly dex: {
                                            readonly type: "string";
                                            readonly description: "The decentralized exchange or platform where the transaction occurred, such as AaveV2.";
                                            readonly examples: readonly ["AaveV2"];
                                        };
                                        readonly health_factor: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "A metric specific to lending platforms, indicating the health of the loan or position.";
                                            readonly examples: readonly [1000];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly description: "The name of the asset involved in the transaction.";
                                            readonly examples: readonly ["Wrapped Ether"];
                                        };
                                        readonly platform: {
                                            readonly type: "string";
                                            readonly description: "The DeFi platform associated with the transaction, like AaveV3.";
                                            readonly examples: readonly ["AaveV3"];
                                        };
                                        readonly price_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The price of the asset in USD at the time of the transaction.";
                                            readonly examples: readonly [2132.72];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly symbol: {
                                            readonly type: "string";
                                            readonly description: "The symbol of the asset involved in the transaction.";
                                            readonly examples: readonly ["WETH"];
                                        };
                                        readonly token_icon_link: {
                                            readonly type: "string";
                                            readonly description: "A URL link to the icon image of the token involved in the transaction.";
                                            readonly examples: readonly ["https://logos.uniwhales.io/ethereum/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.jpg"];
                                        };
                                    };
                                    readonly required: readonly ["wallet", "wallet_label", "tx_hash", "tx_type", "chain", "index", "timestamp", "block", "from", "from_label", "action", "address", "amount", "amount_usd", "dex", "health_factor", "name", "platform", "price_usd", "symbol", "token_icon_link"];
                                }, {
                                    readonly type: "object";
                                    readonly description: "This object represents the data structure for a Non-Fungible Token (NFT) minting transaction. It provides detailed information about the transaction, including wallet addresses, transaction hash, the type of NFT transaction (in this case, minting), and blockchain specifics. Additionally, it includes detailed information about the NFT minted, such as its image, contract address, token ID, and associated fees. This structure is particularly useful for platforms tracking NFT minting activities, offering insights into the creation of new NFTs, their associated costs, and the blockchain details.\n";
                                    readonly properties: {
                                        readonly wallet: {
                                            readonly type: "string";
                                            readonly description: "The wallet address involved in the NFT minting transaction.";
                                            readonly examples: readonly ["0xa4c8d9e4ec5f2831701a81389465498b83f9457d"];
                                        };
                                        readonly wallet_label: {
                                            readonly type: "string";
                                            readonly description: "A more readable label or identifier for the wallet address.";
                                            readonly examples: readonly ["0xa4c8...f9457d"];
                                        };
                                        readonly tx_hash: {
                                            readonly type: "string";
                                            readonly description: "The unique hash identifier of the NFT minting transaction.";
                                            readonly examples: readonly ["0xe0f84917036e7e2ebb2f8d73199547bde30d4d2918c67904a4bb200dc5bad215"];
                                        };
                                        readonly tx_type: {
                                            readonly type: "string";
                                            readonly description: "Specifies the type of transaction, in this case, NFT minting.";
                                            readonly examples: readonly ["nft_mint"];
                                        };
                                        readonly chain: {
                                            readonly type: "string";
                                            readonly description: "The blockchain network on which the minting transaction was conducted.";
                                            readonly examples: readonly ["ethereum"];
                                        };
                                        readonly index: {
                                            readonly type: "integer";
                                            readonly description: "A numerical index or identifier for the transaction.";
                                            readonly examples: readonly [10];
                                        };
                                        readonly timestamp: {
                                            readonly type: "integer";
                                            readonly description: "The timestamp marking when the transaction was executed.";
                                            readonly examples: readonly [1702899395];
                                        };
                                        readonly block: {
                                            readonly type: "integer";
                                            readonly description: "The block number on the blockchain where this transaction is recorded.";
                                            readonly examples: readonly [113650309];
                                        };
                                        readonly from: {
                                            readonly type: "string";
                                            readonly description: "The originating wallet address of the transaction.";
                                            readonly examples: readonly ["0xebc18d25d8122da21f73a6bcb78971671f21f6ff"];
                                        };
                                        readonly to: {
                                            readonly type: "string";
                                            readonly description: "The destination wallet address of the transaction.";
                                            readonly examples: readonly ["0xcfdbdb8723619bca23765e09d59c8f745366f8ff"];
                                        };
                                        readonly from_label: {
                                            readonly type: "string";
                                            readonly description: "A readable version of the 'from' wallet address.";
                                            readonly examples: readonly ["0xebc18d25d8122da21f73a6bcb78971671f21f6ff"];
                                        };
                                        readonly to_label: {
                                            readonly type: "string";
                                            readonly description: "A readable version of the 'to' wallet address.";
                                            readonly examples: readonly ["0xcfdb...6f8ff"];
                                        };
                                        readonly thumbnail: {
                                            readonly type: "string";
                                            readonly description: "A thumbnail image URL of the NFT involved in the transaction.";
                                            readonly examples: readonly ["https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/matic-mainnet/284ed679247466683591389baddcfc9b"];
                                        };
                                        readonly image: {
                                            readonly type: "string";
                                            readonly description: "A full image URL of the NFT.";
                                            readonly examples: readonly ["https://nft-cdn.alchemy.com/matic-mainnet/284ed679247466683591389baddcfc9b"];
                                        };
                                        readonly amount: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The number of items of the NFT minted in the transaction.";
                                            readonly examples: readonly [1];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly contract_address: {
                                            readonly type: "string";
                                            readonly description: "The blockchain address of the contract under which the NFT is minted.";
                                            readonly examples: readonly ["0xb27bbc8f0092284a880d1616f184d86c1a640fae"];
                                        };
                                        readonly contract_type: {
                                            readonly type: "string";
                                            readonly description: "The type of contract used for the NFT, such as ERC721.";
                                            readonly examples: readonly ["ERC721"];
                                        };
                                        readonly fee: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The transaction fee incurred for minting the NFT.";
                                            readonly examples: readonly [0.21357696];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly nft_name: {
                                            readonly type: "string";
                                            readonly description: "The name of the NFT minted.";
                                            readonly examples: readonly ["unknown"];
                                        };
                                        readonly nft_symbol: {
                                            readonly type: "string";
                                            readonly description: "The symbol associated with the NFT.";
                                            readonly examples: readonly ["unknown"];
                                        };
                                        readonly nft_token_id: {
                                            readonly type: "string";
                                            readonly description: "The unique token ID of the minted NFT.";
                                            readonly examples: readonly [14];
                                        };
                                        readonly currency_symbol: {
                                            readonly type: "string";
                                            readonly description: "The symbol of the currency used in the transaction (e.g., ETH, MATIC).";
                                            readonly examples: readonly ["MATIC"];
                                        };
                                        readonly type: {
                                            readonly type: "string";
                                            readonly description: "Indicates the contract standard of the NFT, such as ERC721.";
                                            readonly examples: readonly ["ERC721"];
                                        };
                                        readonly value: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The value of the transaction. For minting, this is often zero since the NFT is being created.";
                                            readonly examples: readonly [0];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly value_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The equivalent USD value of the transaction.";
                                            readonly examples: readonly [0];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                    };
                                    readonly required: readonly ["wallet", "wallet_label", "tx_hash", "tx_type", "chain", "index", "timestamp", "block", "from", "to", "from_label", "to_label", "thumbnail", "image", "amount", "contract_address", "contract_type", "fee", "nft_name", "nft_symbol", "nft_token_id", "currency_symbol", "type", "value", "value_usd"];
                                }, {
                                    readonly type: "object";
                                    readonly description: "This object encapsulates the details of a Non-Fungible Token (NFT) trading transaction. It includes comprehensive information such as wallet addresses, transaction hash, type of transaction (NFT trade), blockchain details, and timestamps. The structure provides specific data about the NFT trade, including the NFT's image, contract address, marketplace of the trade, and price details in both cryptocurrency and USD. Additionally, it includes information about the buyer, seller, and whether the transaction involved a bid being accepted. This structure is ideal for platforms that monitor and analyze NFT trading activities, offering detailed insights into each trade, its valuation, and the parties involved.\n";
                                    readonly properties: {
                                        readonly wallet: {
                                            readonly type: "string";
                                            readonly description: "The wallet address involved in the NFT trading transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly wallet_label: {
                                            readonly type: "string";
                                            readonly description: "A readable label for the wallet address.";
                                            readonly examples: readonly ["0xa4c8...f9457d"];
                                        };
                                        readonly tx_hash: {
                                            readonly type: "string";
                                            readonly description: "The unique hash identifier of the NFT trading transaction.";
                                            readonly examples: readonly ["0xe0f84917036e7e2ebb2f8d73199547bde30d4d2918c67904a4bb200dc5bad215"];
                                        };
                                        readonly tx_type: {
                                            readonly type: "string";
                                            readonly description: "Specifies the type of transaction, in this case, NFT trading.";
                                            readonly examples: readonly ["nft_trade"];
                                        };
                                        readonly chain: {
                                            readonly type: "string";
                                            readonly description: "The blockchain network where the trading transaction occurred.";
                                            readonly examples: readonly ["ethereum"];
                                        };
                                        readonly index: {
                                            readonly type: "integer";
                                            readonly description: "A numerical index or identifier for the transaction.";
                                            readonly examples: readonly [10];
                                        };
                                        readonly timestamp: {
                                            readonly type: "integer";
                                            readonly description: "The timestamp marking when the transaction was executed.";
                                            readonly examples: readonly [1702899395];
                                        };
                                        readonly block: {
                                            readonly type: "integer";
                                            readonly description: "The block number on the blockchain where this transaction is recorded.";
                                            readonly examples: readonly [113650309];
                                        };
                                        readonly from: {
                                            readonly type: "string";
                                            readonly description: "The originating wallet address of the transaction.";
                                            readonly examples: readonly ["0xebc18d25d8122da21f73a6bcb78971671f21f6ff"];
                                        };
                                        readonly to: {
                                            readonly type: "string";
                                            readonly description: "The destination wallet address of the transaction.";
                                            readonly examples: readonly ["0xcfdbdb8723619bca23765e09d59c8f745366f8ff"];
                                        };
                                        readonly thumbnail: {
                                            readonly type: "string";
                                            readonly description: "A thumbnail image URL of the NFT involved in the transaction.";
                                            readonly examples: readonly ["https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/matic-mainnet/284ed679247466683591389baddcfc9b"];
                                        };
                                        readonly image: {
                                            readonly type: "string";
                                            readonly description: "A full image URL of the NFT.";
                                            readonly examples: readonly ["https://nft-cdn.alchemy.com/matic-mainnet/284ed679247466683591389baddcfc9b"];
                                        };
                                        readonly action: {
                                            readonly type: "string";
                                            readonly description: "Describes the action taken in the NFT trade, such as 'buy' or 'sell'.";
                                            readonly examples: readonly ["buy"];
                                        };
                                        readonly contract: {
                                            readonly type: "string";
                                            readonly description: "The blockchain contract address associated with the NFT.";
                                            readonly examples: readonly ["0x00000000000000adc04c56bf30ac9d3c0aaf14dc"];
                                        };
                                        readonly marketplace: {
                                            readonly type: "string";
                                            readonly description: "The marketplace where the NFT trade occurred, such as OpenSea.";
                                            readonly examples: readonly ["OpenSea"];
                                        };
                                        readonly nft_address: {
                                            readonly type: "string";
                                            readonly description: "The blockchain address of the NFT involved in the trade.";
                                            readonly examples: readonly ["0xbe9371326f91345777b04394448c23e2bfeaa826"];
                                        };
                                        readonly nft_name: {
                                            readonly type: "string";
                                            readonly description: "The name of the NFT traded.";
                                            readonly examples: readonly ["Gemesis"];
                                        };
                                        readonly nft_symbol: {
                                            readonly type: "string";
                                            readonly description: "The symbol associated with the NFT.";
                                            readonly examples: readonly ["OSP"];
                                        };
                                        readonly nft_token_id: {
                                            readonly type: "string";
                                            readonly description: "The unique token ID of the NFT involved in the trade.";
                                            readonly examples: readonly [32507];
                                        };
                                        readonly price: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The price at which the NFT was traded.";
                                            readonly examples: readonly [0.0151];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly price_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The equivalent USD value of the NFT trade.";
                                            readonly examples: readonly [32.911356];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly profit: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The profit earned from the trade. This may be zero in some transactions.";
                                            readonly examples: readonly [0];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly currency_symbol: {
                                            readonly type: "string";
                                            readonly description: "The symbol of the currency used in the trade, such as WETH or ETH.";
                                            readonly examples: readonly ["WETH"];
                                        };
                                        readonly buyer: {
                                            readonly type: "string";
                                            readonly description: "The wallet address of the buyer in the trade.";
                                        };
                                        readonly seller: {
                                            readonly type: "string";
                                            readonly description: "The wallet address of the seller in the trade.";
                                        };
                                        readonly token: {
                                            readonly type: "string";
                                            readonly description: "The token type used in the transaction.";
                                        };
                                        readonly first_interaction: {
                                            readonly type: "boolean";
                                            readonly description: "Indicates whether this was the first interaction between the buyer and seller.";
                                        };
                                        readonly bid_accepted: {
                                            readonly type: "boolean";
                                            readonly description: "Specifies if the transaction involved a bid being accepted.";
                                        };
                                    };
                                    readonly required: readonly ["wallet", "wallet_label", "tx_hash", "tx_type", "chain", "index", "timestamp", "block", "from", "to", "thumbnail", "image", "action", "contract", "marketplace", "nft_address", "nft_name", "nft_symbol", "nft_token_id", "price", "price_usd", "profit", "currency_symbol", "buyer", "seller", "token", "first_interaction", "bid_accepted"];
                                }, {
                                    readonly type: "object";
                                    readonly description: "This object type details a Non-Fungible Token (NFT) transfer transaction. It includes essential information such as wallet addresses, transaction hash, NFT details, and blockchain specifics. This structure is particularly useful for tracking NFT transfers, providing a complete overview of the transaction, including the involved parties (from and to addresses), the NFT's contract details, and the transaction's metadata such as timestamps and blockchain network. The object also includes the NFT's image, name, symbol, and token ID, offering a comprehensive view of the NFT being transferred.\n";
                                    readonly properties: {
                                        readonly wallet: {
                                            readonly type: "string";
                                            readonly description: "The wallet address involved in the NFT transfer transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly wallet_label: {
                                            readonly type: "string";
                                            readonly description: "A readable label for the wallet address.";
                                            readonly examples: readonly ["0xa4c8...f9457d"];
                                        };
                                        readonly tx_hash: {
                                            readonly type: "string";
                                            readonly description: "The unique hash identifier of the NFT transfer transaction.";
                                            readonly examples: readonly ["0xe0f84917036e7e2ebb2f8d73199547bde30d4d2918c67904a4bb200dc5bad215"];
                                        };
                                        readonly tx_type: {
                                            readonly type: "string";
                                            readonly description: "Specifies the type of transaction, in this case, NFT transfer.";
                                            readonly examples: readonly ["nft_transfer"];
                                        };
                                        readonly chain: {
                                            readonly type: "string";
                                            readonly description: "The blockchain network where the transfer transaction occurred.";
                                            readonly examples: readonly ["ethereum"];
                                        };
                                        readonly index: {
                                            readonly type: "integer";
                                            readonly description: "A numerical index or identifier for the transaction.";
                                            readonly examples: readonly [10];
                                        };
                                        readonly timestamp: {
                                            readonly type: "integer";
                                            readonly description: "The timestamp marking when the transaction was executed.";
                                            readonly examples: readonly [1702899395];
                                        };
                                        readonly block: {
                                            readonly type: "integer";
                                            readonly description: "The block number on the blockchain where this transaction is recorded.";
                                            readonly examples: readonly [113650309];
                                        };
                                        readonly from: {
                                            readonly type: "string";
                                            readonly description: "The originating wallet address of the transaction.";
                                            readonly examples: readonly ["0xebc18d25d8122da21f73a6bcb78971671f21f6ff"];
                                        };
                                        readonly to: {
                                            readonly type: "string";
                                            readonly description: "The destination wallet address of the transaction.";
                                            readonly examples: readonly ["0xcfdbdb8723619bca23765e09d59c8f745366f8ff"];
                                        };
                                        readonly from_label: {
                                            readonly type: "string";
                                            readonly description: "A readable version of the 'from' wallet address.";
                                            readonly examples: readonly ["0xebc18d25d8122da21f73a6bcb78971671f21f6ff"];
                                        };
                                        readonly to_label: {
                                            readonly type: "string";
                                            readonly description: "A readable version of the 'to' wallet address.";
                                            readonly examples: readonly ["0xcfdb...6f8ff"];
                                        };
                                        readonly thumbnail: {
                                            readonly type: "string";
                                            readonly description: "A thumbnail image URL of the NFT involved in the transaction.";
                                            readonly examples: readonly ["https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/matic-mainnet/284ed679247466683591389baddcfc9b"];
                                        };
                                        readonly image: {
                                            readonly type: "string";
                                            readonly description: "A full image URL of the NFT.";
                                            readonly examples: readonly ["https://nft-cdn.alchemy.com/matic-mainnet/284ed679247466683591389baddcfc9b"];
                                        };
                                        readonly contract_address: {
                                            readonly type: "string";
                                            readonly description: "The blockchain address of the contract under which the NFT is registered.";
                                            readonly examples: readonly ["0xb27bbc8f0092284a880d1616f184d86c1a640fae"];
                                        };
                                        readonly contract_type: {
                                            readonly type: "string";
                                            readonly description: "The type of contract used for the NFT, such as ERC721.";
                                            readonly examples: readonly ["ERC721"];
                                        };
                                        readonly fee: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The transaction fee incurred for the transfer of the NFT.";
                                            readonly examples: readonly [0.21357696];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly nft_name: {
                                            readonly type: "string";
                                            readonly description: "The name of the NFT being transferred.";
                                            readonly examples: readonly ["unknown"];
                                        };
                                        readonly nft_symbol: {
                                            readonly type: "string";
                                            readonly description: "The symbol associated with the NFT.";
                                            readonly examples: readonly ["unknown"];
                                        };
                                        readonly nft_token_id: {
                                            readonly type: "string";
                                            readonly description: "The unique token ID of the NFT involved in the transfer.";
                                            readonly examples: readonly [3];
                                        };
                                        readonly type: {
                                            readonly type: "string";
                                            readonly description: "Indicates the contract standard of the NFT, such as ERC721.";
                                            readonly examples: readonly ["ERC721"];
                                        };
                                        readonly value: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The value of the NFT at the time of the transfer. This might be represented in the native cryptocurrency of the blockchain.";
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                    };
                                    readonly required: readonly ["wallet", "wallet_label", "tx_hash", "tx_type", "chain", "index", "timestamp", "block", "from", "to", "from_label", "to_label", "thumbnail", "image", "contract_address", "contract_type", "fee", "nft_name", "nft_symbol", "nft_token_id", "type", "value"];
                                }, {
                                    readonly type: "object";
                                    readonly description: "This object encapsulates detailed information about a Non-Fungible Token (NFT) lending transaction. It includes comprehensive details such as wallet addresses, transaction hash, the type of NFT transaction, the blockchain used, and timestamps. Additionally, it provides specifics about the NFT involved, including its address, name, symbol, image, and the terms of the lending agreement. This structure is particularly useful for platforms that need to track and manage NFT lending activities, providing all necessary details for analyzing and processing such transactions.\n";
                                    readonly properties: {
                                        readonly wallet: {
                                            readonly type: "string";
                                            readonly description: "The wallet address involved in the NFT lending transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly wallet_label: {
                                            readonly type: "string";
                                            readonly description: "A more readable label or identifier for the wallet address.";
                                            readonly examples: readonly ["0xa4c8...f9457d"];
                                        };
                                        readonly tx_hash: {
                                            readonly type: "string";
                                            readonly description: "The unique hash identifier of the NFT lending transaction.";
                                            readonly examples: readonly ["0xe0f84917036e7e2ebb2f8d73199547bde30d4d2918c67904a4bb200dc5bad215"];
                                        };
                                        readonly tx_type: {
                                            readonly type: "string";
                                            readonly description: "Specifies the type of transaction, in this case, NFT lending.";
                                            readonly examples: readonly ["nft_lending"];
                                        };
                                        readonly chain: {
                                            readonly type: "string";
                                            readonly description: "The blockchain network on which the transaction was conducted.";
                                            readonly examples: readonly ["ethereum"];
                                        };
                                        readonly index: {
                                            readonly type: "integer";
                                            readonly description: "A numerical index or identifier for the transaction.";
                                            readonly examples: readonly [10];
                                        };
                                        readonly timestamp: {
                                            readonly type: "integer";
                                            readonly description: "The timestamp marking when the transaction was executed.";
                                            readonly examples: readonly [1702899395];
                                        };
                                        readonly block: {
                                            readonly type: "integer";
                                            readonly description: "The block number on the blockchain where this transaction is recorded.";
                                            readonly examples: readonly [113650309];
                                        };
                                        readonly from: {
                                            readonly type: "string";
                                            readonly description: "The originating wallet address of the transaction.";
                                            readonly examples: readonly ["0xebc18d25d8122da21f73a6bcb78971671f21f6ff"];
                                        };
                                        readonly to: {
                                            readonly type: "string";
                                            readonly description: "The destination wallet address of the transaction.";
                                            readonly examples: readonly ["0xcfdbdb8723619bca23765e09d59c8f745366f8ff"];
                                        };
                                        readonly from_label: {
                                            readonly type: "string";
                                            readonly description: "A readable version of the 'from' wallet address.";
                                            readonly examples: readonly ["0xebc18d25d8122da21f73a6bcb78971671f21f6ff"];
                                        };
                                        readonly to_label: {
                                            readonly type: "string";
                                            readonly description: "A readable version of the 'to' wallet address.";
                                            readonly examples: readonly ["0xcfdb...6f8ff"];
                                        };
                                        readonly thumbnail: {
                                            readonly type: "string";
                                            readonly description: "A thumbnail image URL of the NFT involved in the transaction.";
                                            readonly examples: readonly ["https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/matic-mainnet/284ed679247466683591389baddcfc9b"];
                                        };
                                        readonly image: {
                                            readonly type: "string";
                                            readonly description: "A full image URL of the NFT.";
                                            readonly examples: readonly ["https://nft-cdn.alchemy.com/matic-mainnet/284ed679247466683591389baddcfc9b"];
                                        };
                                        readonly action: {
                                            readonly type: "string";
                                            readonly description: "Describes the action taken in the NFT lending transaction, such as 'buy', 'lend', etc.";
                                            readonly examples: readonly ["buy"];
                                        };
                                        readonly currency_address: {
                                            readonly type: "string";
                                            readonly description: "The blockchain address of the currency used in the transaction.";
                                            readonly examples: readonly ["0x00000000000000adc04c56bf30ac9d3c0aaf14dc"];
                                        };
                                        readonly currency_symbol: {
                                            readonly type: "string";
                                            readonly description: "The symbol of the currency used in the transaction.";
                                            readonly examples: readonly ["OpenSea"];
                                        };
                                        readonly interest: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The interest rate applied in the NFT lending transaction.";
                                            readonly examples: readonly [0.0151];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly nft_address: {
                                            readonly type: "string";
                                            readonly description: "The blockchain address of the NFT involved in the transaction.";
                                            readonly examples: readonly ["0xbe9371326f91345777b04394448c23e2bfeaa826"];
                                        };
                                        readonly nft_name: {
                                            readonly type: "string";
                                            readonly description: "The name of the NFT.";
                                            readonly examples: readonly ["Gemesis"];
                                        };
                                        readonly nft_symbol: {
                                            readonly type: "string";
                                            readonly description: "The symbol of the NFT.";
                                            readonly examples: readonly ["OSP"];
                                        };
                                        readonly platform: {
                                            readonly type: "string";
                                            readonly description: "The platform or service through which the NFT lending transaction was conducted.";
                                            readonly examples: readonly ["Blend"];
                                        };
                                        readonly nft_token_id: {
                                            readonly type: "string";
                                            readonly description: "The unique identifier for the specific NFT within its collection.";
                                            readonly examples: readonly [32507];
                                        };
                                        readonly price: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The price at which the NFT was lent or transacted.";
                                            readonly examples: readonly [0.0151];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly price_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The equivalent USD value of the transaction price.";
                                            readonly examples: readonly [32.911356];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly terms: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "Specifies the terms of the NFT lending agreement.";
                                            readonly examples: readonly [0.0151];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly refinance: {
                                            readonly type: "boolean";
                                            readonly description: "Indicates whether the transaction involved refinancing of the NFT.";
                                            readonly examples: readonly [false];
                                        };
                                    };
                                    readonly required: readonly ["wallet", "wallet_label", "tx_hash", "tx_type", "chain", "index", "timestamp", "block", "from", "to", "from_label", "to_label", "thumbnail", "image", "action", "currency_address", "currency_symbol", "interest", "nft_address", "nft_name", "nft_symbol", "platform", "nft_token_id", "price", "price_usd", "terms", "refinance"];
                                }, {
                                    readonly type: "object";
                                    readonly description: "This object represents a detailed structure for a blockchain transaction, encompassing various aspects like wallet addresses, transaction hash, type, associated chains, and financial details. It is designed to provide a comprehensive view of a transaction, including the wallets involved, the transaction's nature, the chains it spans, and the financial details like the amount and its equivalent in USD. This structure is ideal for applications that require detailed tracking and analysis of blockchain transactions.\n";
                                    readonly properties: {
                                        readonly wallet: {
                                            readonly type: "string";
                                            readonly description: "The wallet address involved in the transaction.";
                                            readonly examples: readonly ["0xa4c8d9e4ec5f2831701a81389465498b83f9457d"];
                                        };
                                        readonly wallet_label: {
                                            readonly type: "string";
                                            readonly description: "A shortened, more readable version of the wallet address.";
                                            readonly examples: readonly ["0xa4c8...f9457d"];
                                        };
                                        readonly tx_hash: {
                                            readonly type: "string";
                                            readonly description: "The unique hash identifier of the transaction.";
                                            readonly examples: readonly ["0xb23dc807e8063feaefe20644f85d13a7238a8b01b9fd167135ef664146692f99"];
                                        };
                                        readonly tx_type: {
                                            readonly type: "string";
                                            readonly description: "The type of transaction.";
                                            readonly examples: readonly ["bridge"];
                                        };
                                        readonly chain: {
                                            readonly type: "string";
                                            readonly description: "The blockchain on which the transaction occurred, like 'ethereum'.";
                                            readonly examples: readonly ["ethereum"];
                                        };
                                        readonly index: {
                                            readonly type: "integer";
                                            readonly description: "A numeric index or identifier for the transaction.";
                                            readonly examples: readonly [7];
                                        };
                                        readonly timestamp: {
                                            readonly type: "integer";
                                            readonly description: "The timestamp when the transaction occurred.";
                                            readonly examples: readonly [1702899899];
                                        };
                                        readonly block: {
                                            readonly type: "integer";
                                            readonly description: "The block number on the blockchain in which the transaction is included.";
                                            readonly examples: readonly [18812661];
                                        };
                                        readonly from: {
                                            readonly type: "string";
                                            readonly description: "The originating wallet address of the transaction.";
                                            readonly examples: readonly ["0xecc19e177d24551aa7ed6bc6fe566eca726cc8a9"];
                                        };
                                        readonly to: {
                                            readonly type: "string";
                                            readonly description: "The destination wallet address of the transaction.";
                                            readonly examples: readonly ["0xbf3b71decbcefabb3210b9d8f18ec22e0556f5f0"];
                                        };
                                        readonly from_label: {
                                            readonly type: "string";
                                            readonly description: "A shortened, more readable version of the originating wallet address.";
                                            readonly examples: readonly ["0xecc1...cc8a9"];
                                        };
                                        readonly to_label: {
                                            readonly type: "string";
                                            readonly description: "A shortened, more readable version of the destination wallet address.";
                                            readonly examples: readonly ["0xbf3b...6f5f0"];
                                        };
                                        readonly token_address: {
                                            readonly type: "string";
                                            readonly description: "The address of the token involved in the transaction.";
                                            readonly examples: readonly ["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"];
                                        };
                                        readonly token_name: {
                                            readonly type: "string";
                                            readonly description: "The name of the token involved in the transaction.";
                                            readonly examples: readonly ["Wrapped Ether"];
                                        };
                                        readonly token_symbol: {
                                            readonly type: "string";
                                            readonly description: "The symbol of the token involved in the transaction.";
                                            readonly examples: readonly ["WETH"];
                                        };
                                        readonly token_icon_link: {
                                            readonly type: "string";
                                            readonly description: "A link to the icon of the token involved in the transaction.";
                                            readonly examples: readonly ["https://logos.uniwhales.io/ethereum/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.jpg"];
                                        };
                                        readonly amount: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The amount of the token involved in the transaction.";
                                            readonly examples: readonly [0.09956219862680922];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly amount_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The equivalent amount in USD of the tokens involved in the transaction.";
                                            readonly examples: readonly [212.00276764599622];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly from_chain: {
                                            readonly type: "string";
                                            readonly description: "The originating chain of the transaction, in cases of cross-chain activities.";
                                            readonly examples: readonly ["Arbitrum"];
                                        };
                                        readonly to_chain: {
                                            readonly type: "string";
                                            readonly description: "The destination chain of the transaction, in cases of cross-chain activities.";
                                            readonly examples: readonly ["Ethereum"];
                                        };
                                        readonly platform: {
                                            readonly type: "string";
                                            readonly description: "The platform or service used for the transaction.";
                                            readonly examples: readonly ["Stargate"];
                                        };
                                        readonly price: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The price of the token at the time of the transaction.";
                                            readonly examples: readonly [2129.35];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly type: {
                                            readonly type: "string";
                                            readonly description: "Specifies the nature of the transaction, like 'withdraw', 'deposit', etc.";
                                            readonly examples: readonly ["withdraw"];
                                        };
                                    };
                                    readonly required: readonly ["wallet", "wallet_label", "tx_hash", "tx_type", "chain", "index", "timestamp", "block", "from", "to", "from_label", "to_label", "token_address", "token_name", "token_symbol", "amount", "amount_usd", "from_chain", "to_chain", "platform", "price", "type", "token_icon_link"];
                                }, {
                                    readonly type: "object";
                                    readonly description: "This object provides a structure for representing a contract interaction event on the blockchain.";
                                    readonly properties: {
                                        readonly wallet: {
                                            readonly type: "string";
                                            readonly description: "The wallet address participating in the LP transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly wallet_label: {
                                            readonly type: "string";
                                            readonly description: "A human-readable label or name associated with the wallet, such as a ENS name.";
                                            readonly examples: readonly ["vitalik.eth"];
                                        };
                                        readonly tx_hash: {
                                            readonly type: "string";
                                            readonly description: "The unique transaction hash identifying this specific LP transaction.";
                                            readonly examples: readonly ["0xe0f84917036e7e2ebb2f8d73199547bde30d4d2918c67904a4bb200dc5bad215"];
                                        };
                                        readonly tx_type: {
                                            readonly type: "string";
                                            readonly description: "Indicates the type of transaction, in this case, liquidity pool (LP) related.";
                                            readonly examples: readonly ["lp"];
                                        };
                                        readonly chain: {
                                            readonly type: "string";
                                            readonly description: "The blockchain network (e.g., Ethereum, Optimism) where this transaction takes place.";
                                            readonly examples: readonly ["optimism"];
                                        };
                                        readonly index: {
                                            readonly type: "integer";
                                            readonly description: "A numerical index or identifier for the transaction.";
                                            readonly examples: readonly [10];
                                        };
                                        readonly timestamp: {
                                            readonly type: "integer";
                                            readonly description: "The timestamp marking when the transaction was executed.";
                                            readonly examples: readonly [1702899395];
                                        };
                                        readonly block: {
                                            readonly type: "integer";
                                            readonly description: "The block number on the blockchain where this transaction is recorded.";
                                            readonly examples: readonly [113650309];
                                        };
                                        readonly from: {
                                            readonly type: "string";
                                            readonly description: "The originating wallet address for the transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly to: {
                                            readonly type: "string";
                                            readonly description: "The destination wallet address for the transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly contract_address: {
                                            readonly type: "string";
                                            readonly description: "The address of the smart contract involved in the interaction.";
                                            readonly examples: readonly ["0x7f5c764cbc14f9669b88837ca1490cca17c31607"];
                                        };
                                        readonly contract_label: {
                                            readonly type: "string";
                                            readonly description: "A human-readable label or name associated with the smart contract.";
                                            readonly examples: readonly ["Uniswap V3"];
                                        };
                                    };
                                    readonly required: readonly ["wallet", "wallet_label", "tx_hash", "tx_type", "chain", "index", "timestamp", "block", "from", "to", "contract_address", "contract_label"];
                                }, {
                                    readonly type: "object";
                                    readonly description: "This object provides a structure for representing a wrap event on the blockchain.";
                                    readonly properties: {
                                        readonly wallet: {
                                            readonly type: "string";
                                            readonly description: "The wallet address participating in the LP transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly wallet_label: {
                                            readonly type: "string";
                                            readonly description: "A human-readable label or name associated with the wallet, such as a ENS name.";
                                            readonly examples: readonly ["vitalik.eth"];
                                        };
                                        readonly tx_hash: {
                                            readonly type: "string";
                                            readonly description: "The unique transaction hash identifying this specific LP transaction.";
                                            readonly examples: readonly ["0xe0f84917036e7e2ebb2f8d73199547bde30d4d2918c67904a4bb200dc5bad215"];
                                        };
                                        readonly tx_type: {
                                            readonly type: "string";
                                            readonly description: "Indicates the type of transaction, in this case, liquidity pool (LP) related.";
                                            readonly examples: readonly ["lp"];
                                        };
                                        readonly chain: {
                                            readonly type: "string";
                                            readonly description: "The blockchain network (e.g., Ethereum, Optimism) where this transaction takes place.";
                                            readonly examples: readonly ["optimism"];
                                        };
                                        readonly index: {
                                            readonly type: "integer";
                                            readonly description: "A numerical index or identifier for the transaction.";
                                            readonly examples: readonly [10];
                                        };
                                        readonly timestamp: {
                                            readonly type: "integer";
                                            readonly description: "The timestamp marking when the transaction was executed.";
                                            readonly examples: readonly [1702899395];
                                        };
                                        readonly block: {
                                            readonly type: "integer";
                                            readonly description: "The block number on the blockchain where this transaction is recorded.";
                                            readonly examples: readonly [113650309];
                                        };
                                        readonly dex: {
                                            readonly type: "string";
                                            readonly description: "The decentralized exchange where the wrap transaction occurred.";
                                            readonly examples: readonly ["Uniswap"];
                                        };
                                        readonly from: {
                                            readonly type: "string";
                                            readonly description: "The originating wallet address for the transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly to: {
                                            readonly type: "string";
                                            readonly description: "The destination wallet address for the transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly action: {
                                            readonly type: "string";
                                        };
                                        readonly amount: {
                                            readonly type: "number";
                                            readonly description: "The amount of tokens wrapped in the transaction.";
                                            readonly examples: readonly [100];
                                        };
                                        readonly amount_usd: {
                                            readonly type: "number";
                                            readonly description: "The equivalent amount in USD of the wrapped tokens.";
                                            readonly examples: readonly ["100.0"];
                                        };
                                        readonly contract_address: {
                                            readonly type: "string";
                                            readonly description: "The address of the smart contract involved in the interaction.";
                                            readonly examples: readonly ["0x7f5c764cbc14f9669b88837ca1490cca17c31607"];
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly description: "The name of the token wrapped in the transaction.";
                                            readonly examples: readonly ["Wrapped Ether"];
                                        };
                                        readonly symbol: {
                                            readonly type: "string";
                                            readonly description: "The symbol of the token wrapped in the transaction.";
                                            readonly examples: readonly ["WETH"];
                                        };
                                        readonly token_price_usd: {
                                            readonly type: "number";
                                            readonly description: "The price of the token in USD at the time of the transaction.";
                                            readonly examples: readonly ["100.0"];
                                        };
                                        readonly token_type: {
                                            readonly type: "string";
                                            readonly description: "The type of token wrapped in the transaction.";
                                            readonly examples: readonly ["ERC20"];
                                        };
                                        readonly token_icon_link: {
                                            readonly type: "string";
                                            readonly description: "A link to the icon of the token involved in the transaction.";
                                            readonly examples: readonly ["https://logos.uniwhales.io/ethereum/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.jpg"];
                                        };
                                    };
                                    readonly required: readonly ["wallet", "wallet_label", "tx_hash", "tx_type", "chain", "index", "timestamp", "block", "dex", "from", "to", "action", "amount", "amount_usd", "contract_address", "name", "symbol", "token_price_usd", "token_type", "token_icon_link"];
                                }, {
                                    readonly type: "object";
                                    readonly description: "This object provides a structure for representing a Sudo Pool event on the blockchain.";
                                    readonly properties: {
                                        readonly wallet: {
                                            readonly type: "string";
                                            readonly description: "The wallet address participating in the LP transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly wallet_label: {
                                            readonly type: "string";
                                            readonly description: "A human-readable label or name associated with the wallet, such as a ENS name.";
                                            readonly examples: readonly ["vitalik.eth"];
                                        };
                                        readonly tx_hash: {
                                            readonly type: "string";
                                            readonly description: "The unique transaction hash identifying this specific LP transaction.";
                                            readonly examples: readonly ["0xe0f84917036e7e2ebb2f8d73199547bde30d4d2918c67904a4bb200dc5bad215"];
                                        };
                                        readonly tx_type: {
                                            readonly type: "string";
                                            readonly description: "Indicates the type of transaction, in this case, liquidity pool (LP) related.";
                                            readonly examples: readonly ["lp"];
                                        };
                                        readonly chain: {
                                            readonly type: "string";
                                            readonly description: "The blockchain network (e.g., Ethereum, Optimism) where this transaction takes place.";
                                            readonly examples: readonly ["optimism"];
                                        };
                                        readonly index: {
                                            readonly type: "integer";
                                            readonly description: "A numerical index or identifier for the transaction.";
                                            readonly examples: readonly [10];
                                        };
                                        readonly timestamp: {
                                            readonly type: "integer";
                                            readonly description: "The timestamp marking when the transaction was executed.";
                                            readonly examples: readonly [1702899395];
                                        };
                                        readonly block: {
                                            readonly type: "integer";
                                            readonly description: "The block number on the blockchain where this transaction is recorded.";
                                            readonly examples: readonly [113650309];
                                        };
                                        readonly dex: {
                                            readonly type: "string";
                                            readonly description: "The decentralized exchange where the wrap transaction occurred.";
                                            readonly examples: readonly ["Uniswap"];
                                        };
                                        readonly from: {
                                            readonly type: "string";
                                            readonly description: "The originating wallet address for the transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly nft_address: {
                                            readonly type: "string";
                                            readonly description: "The address of the NFT contract involved in the interaction.";
                                            readonly examples: readonly ["0x7f5c764cbc14f9669b88837ca1490cca17c31607"];
                                        };
                                        readonly nft_amount: {
                                            readonly type: "integer";
                                            readonly description: "The amount of NFTs involved in the transaction.";
                                            readonly examples: readonly [1];
                                        };
                                        readonly nft_price: {
                                            readonly type: "number";
                                            readonly description: "The price of the NFT in the transaction.";
                                            readonly examples: readonly [100];
                                        };
                                        readonly nft_symbol: {
                                            readonly type: "string";
                                            readonly description: "The symbol of the NFT in the transaction.";
                                            readonly examples: readonly ["NFT"];
                                        };
                                        readonly to: {
                                            readonly type: "string";
                                            readonly description: "The destination wallet address for the transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly token0_address: {
                                            readonly type: "string";
                                            readonly description: "The address of the first token in the LP pair.";
                                            readonly examples: readonly ["0x7f5c764cbc14f9669b88837ca1490cca17c31607"];
                                        };
                                        readonly token0_amount: {
                                            readonly type: "number";
                                            readonly description: "The amount of the first token in the LP pair.";
                                            readonly examples: readonly [100];
                                        };
                                        readonly token0_amount_usd: {
                                            readonly type: "number";
                                            readonly description: "The equivalent amount in USD of the first token in the LP pair.";
                                            readonly examples: readonly [100];
                                        };
                                        readonly token0_name: {
                                            readonly type: "string";
                                            readonly description: "The name of the first token in the LP pair.";
                                            readonly examples: readonly ["Wrapped Ether"];
                                        };
                                        readonly token0_price_usd: {
                                            readonly type: "number";
                                            readonly description: "The price of the first token in the LP pair in USD.";
                                            readonly examples: readonly [100];
                                        };
                                        readonly token0_symbol: {
                                            readonly type: "string";
                                            readonly description: "The symbol of the first token in the LP pair.";
                                            readonly examples: readonly ["WETH"];
                                        };
                                        readonly token0_icon_link: {
                                            readonly type: "string";
                                            readonly description: "A link to the icon of the token involved in the transaction.";
                                            readonly examples: readonly ["https://logos.uniwhales.io/ethereum/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.jpg"];
                                        };
                                    };
                                    readonly required: readonly ["wallet", "wallet_label", "tx_hash", "tx_type", "chain", "index", "timestamp", "nft_address", "nft_amount", "nft_price", "nft_symbol", "token0_address", "token0_amount", "token0_amount_usd", "token0_name", "token0_price_usd", "token0_symbol", "from", "to", "token0_icon_link"];
                                }, {
                                    readonly type: "object";
                                    readonly description: "This object provides a structure for representing a reward event on the blockchain.";
                                    readonly properties: {
                                        readonly wallet: {
                                            readonly type: "string";
                                            readonly description: "The wallet address participating in the LP transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly wallet_label: {
                                            readonly type: "string";
                                            readonly description: "A human-readable label or name associated with the wallet, such as a ENS name.";
                                            readonly examples: readonly ["vitalik.eth"];
                                        };
                                        readonly tx_hash: {
                                            readonly type: "string";
                                            readonly description: "The unique transaction hash identifying this specific LP transaction.";
                                            readonly examples: readonly ["0xe0f84917036e7e2ebb2f8d73199547bde30d4d2918c67904a4bb200dc5bad215"];
                                        };
                                        readonly tx_type: {
                                            readonly type: "string";
                                            readonly description: "Indicates the type of transaction, in this case, liquidity pool (LP) related.";
                                            readonly examples: readonly ["lp"];
                                        };
                                        readonly chain: {
                                            readonly type: "string";
                                            readonly description: "The blockchain network (e.g., Ethereum, Optimism) where this transaction takes place.";
                                            readonly examples: readonly ["optimism"];
                                        };
                                        readonly index: {
                                            readonly type: "integer";
                                            readonly description: "A numerical index or identifier for the transaction.";
                                            readonly examples: readonly [10];
                                        };
                                        readonly timestamp: {
                                            readonly type: "integer";
                                            readonly description: "The timestamp marking when the transaction was executed.";
                                            readonly examples: readonly [1702899395];
                                        };
                                        readonly block: {
                                            readonly type: "integer";
                                            readonly description: "The block number on the blockchain where this transaction is recorded.";
                                            readonly examples: readonly [113650309];
                                        };
                                        readonly address: {
                                            readonly type: "string";
                                            readonly description: "The address of the token involved in the transaction.";
                                            readonly examples: readonly ["0x7f5c764cbc14f9669b88837ca1490cca17c31607"];
                                        };
                                        readonly amount: {
                                            readonly type: "number";
                                            readonly description: "The amount of tokens involved in the transaction.";
                                            readonly examples: readonly [100];
                                        };
                                        readonly amount_usd: {
                                            readonly type: "number";
                                            readonly description: "The equivalent amount in USD of the tokens involved in the transaction.";
                                            readonly examples: readonly [100];
                                        };
                                        readonly from: {
                                            readonly type: "string";
                                            readonly description: "The originating wallet address for the transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly description: "The name of the token involved in the transaction.";
                                            readonly examples: readonly ["Wrapped Ether"];
                                        };
                                        readonly price_usd: {
                                            readonly type: "number";
                                            readonly description: "The price of the token in USD.";
                                            readonly examples: readonly [100];
                                        };
                                        readonly symbol: {
                                            readonly type: "string";
                                            readonly description: "The symbol of the token involved in the transaction.";
                                            readonly examples: readonly ["WETH"];
                                        };
                                    };
                                    readonly required: readonly ["wallet", "wallet_label", "tx_hash", "tx_type", "chain", "index", "timestamp", "block", "address", "amount", "amount_usd", "from", "name", "price_usd", "symbol"];
                                }, {
                                    readonly type: "object";
                                    readonly description: "This object provides a structure for representing a staking event on the blockchain.";
                                    readonly properties: {
                                        readonly wallet: {
                                            readonly type: "string";
                                            readonly description: "The wallet address participating in the LP transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly wallet_label: {
                                            readonly type: "string";
                                            readonly description: "A human-readable label or name associated with the wallet, such as a ENS name.";
                                            readonly examples: readonly ["vitalik.eth"];
                                        };
                                        readonly tx_hash: {
                                            readonly type: "string";
                                            readonly description: "The unique transaction hash identifying this specific LP transaction.";
                                            readonly examples: readonly ["0xe0f84917036e7e2ebb2f8d73199547bde30d4d2918c67904a4bb200dc5bad215"];
                                        };
                                        readonly tx_type: {
                                            readonly type: "string";
                                            readonly description: "Indicates the type of transaction, in this case, liquidity pool (LP) related.";
                                            readonly examples: readonly ["lp"];
                                        };
                                        readonly chain: {
                                            readonly type: "string";
                                            readonly description: "The blockchain network (e.g., Ethereum, Optimism) where this transaction takes place.";
                                            readonly examples: readonly ["optimism"];
                                        };
                                        readonly index: {
                                            readonly type: "integer";
                                            readonly description: "A numerical index or identifier for the transaction.";
                                            readonly examples: readonly [10];
                                        };
                                        readonly timestamp: {
                                            readonly type: "integer";
                                            readonly description: "The timestamp marking when the transaction was executed.";
                                            readonly examples: readonly [1702899395];
                                        };
                                        readonly block: {
                                            readonly type: "integer";
                                            readonly description: "The block number on the blockchain where this transaction is recorded.";
                                            readonly examples: readonly [113650309];
                                        };
                                        readonly from: {
                                            readonly type: "string";
                                            readonly description: "The originating wallet address for the transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly to: {
                                            readonly type: "string";
                                            readonly description: "The destination wallet address for the transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly from_label: {
                                            readonly type: "string";
                                            readonly description: "A human-readable label or name associated with the originating wallet.";
                                            readonly examples: readonly ["Alice"];
                                        };
                                        readonly to_label: {
                                            readonly type: "string";
                                            readonly description: "A human-readable label or name associated with the destination wallet.";
                                            readonly examples: readonly ["Bob"];
                                        };
                                        readonly amount: {
                                            readonly type: "number";
                                            readonly description: "The amount of tokens staked in the transaction.";
                                            readonly examples: readonly [100];
                                        };
                                        readonly amount_usd: {
                                            readonly type: "number";
                                            readonly description: "The equivalent amount in USD of the staked tokens.";
                                            readonly examples: readonly [100];
                                        };
                                        readonly token_price_usd: {
                                            readonly type: "number";
                                            readonly description: "The price of the token in USD.";
                                            readonly examples: readonly [100];
                                        };
                                        readonly contract_address: {
                                            readonly type: "string";
                                            readonly description: "The address of the smart contract involved in the interaction.";
                                            readonly examples: readonly ["0x7f5c764cbc14f9669b88837ca1490cca17c31607"];
                                        };
                                        readonly symbol: {
                                            readonly type: "string";
                                            readonly description: "The symbol of the token staked in the transaction.";
                                            readonly examples: readonly ["WETH"];
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly description: "The name of the token staked in the transaction.";
                                            readonly examples: readonly ["Wrapped Ether"];
                                        };
                                        readonly action: {
                                            readonly type: "string";
                                            readonly description: "The action taken in the staking transaction.";
                                            readonly examples: readonly ["stake"];
                                        };
                                    };
                                    readonly required: readonly ["wallet", "wallet_label", "tx_hash", "tx_type", "chain", "index", "timestamp", "block", "from", "to", "from_label", "to_label", "amount", "amount_usd", "token_price_usd", "contract_address", "symbol", "name", "action"];
                                }, {
                                    readonly type: "object";
                                    readonly description: "This object provides a structure for representing a Perpetual event on the blockchain.";
                                    readonly properties: {
                                        readonly wallet: {
                                            readonly type: "string";
                                            readonly description: "The wallet address participating in the LP transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly wallet_label: {
                                            readonly type: "string";
                                            readonly description: "A human-readable label or name associated with the wallet, such as a ENS name.";
                                            readonly examples: readonly ["vitalik.eth"];
                                        };
                                        readonly tx_hash: {
                                            readonly type: "string";
                                            readonly description: "The unique transaction hash identifying this specific LP transaction.";
                                            readonly examples: readonly ["0xe0f84917036e7e2ebb2f8d73199547bde30d4d2918c67904a4bb200dc5bad215"];
                                        };
                                        readonly tx_type: {
                                            readonly type: "string";
                                            readonly description: "Indicates the type of transaction, in this case, liquidity pool (LP) related.";
                                            readonly examples: readonly ["lp"];
                                        };
                                        readonly chain: {
                                            readonly type: "string";
                                            readonly description: "The blockchain network (e.g., Ethereum, Optimism) where this transaction takes place.";
                                            readonly examples: readonly ["optimism"];
                                        };
                                        readonly index: {
                                            readonly type: "integer";
                                            readonly description: "A numerical index or identifier for the transaction.";
                                            readonly examples: readonly [10];
                                        };
                                        readonly timestamp: {
                                            readonly type: "integer";
                                            readonly description: "The timestamp marking when the transaction was executed.";
                                            readonly examples: readonly [1702899395];
                                        };
                                        readonly block: {
                                            readonly type: "integer";
                                            readonly description: "The block number on the blockchain where this transaction is recorded.";
                                            readonly examples: readonly [113650309];
                                        };
                                        readonly action: {
                                            readonly type: "string";
                                            readonly description: "The action taken in the Perpetual event.";
                                            readonly examples: readonly ["buy"];
                                        };
                                        readonly amount_usd: {
                                            readonly type: "number";
                                            readonly description: "The equivalent amount in USD of the tokens involved in the transaction.";
                                            readonly examples: readonly [100];
                                        };
                                        readonly average_price: {
                                            readonly type: "number";
                                            readonly description: "The average price of the tokens involved in the transaction.";
                                            readonly examples: readonly [100];
                                        };
                                        readonly base_token_address: {
                                            readonly type: "string";
                                            readonly description: "The address of the base token involved in the transaction.";
                                            readonly examples: readonly ["0x7f5c764cbc14f9669b88837ca1490cca17c31607"];
                                        };
                                        readonly base_token_amount: {
                                            readonly type: "number";
                                            readonly description: "The amount of base tokens involved in the transaction.";
                                            readonly examples: readonly [100];
                                        };
                                        readonly base_token_symbol: {
                                            readonly type: "string";
                                            readonly description: "The symbol of the base token involved in the transaction.";
                                            readonly examples: readonly ["ETH"];
                                        };
                                        readonly dex: {
                                            readonly type: "string";
                                            readonly description: "The decentralized exchange where the Perpetual transaction occurred.";
                                            readonly examples: readonly ["Uniswap"];
                                        };
                                        readonly from: {
                                            readonly type: "string";
                                            readonly description: "The originating wallet address for the transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly liquidation: {
                                            readonly type: "boolean";
                                            readonly description: "Indicates whether the transaction was a liquidation.";
                                            readonly examples: readonly [false];
                                        };
                                        readonly liquidation_price: {
                                            readonly type: "number";
                                            readonly description: "The price at which the liquidation occurred.";
                                            readonly examples: readonly [100];
                                        };
                                        readonly to: {
                                            readonly type: "string";
                                            readonly description: "The destination wallet address for the transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly trade_direction: {
                                            readonly type: "string";
                                            readonly description: "The direction of the trade in the Perpetual transaction.";
                                            readonly examples: readonly ["long"];
                                        };
                                        readonly perp_details: {
                                            readonly type: "string";
                                            readonly description: "Additional details about the Perpetual transaction.";
                                            readonly examples: readonly ["details"];
                                        };
                                        readonly token0_address: {
                                            readonly type: "string";
                                            readonly description: "The address of the first token in the LP pair.";
                                            readonly examples: readonly ["0x7f5c764cbc14f9669b88837ca1490cca17c31607"];
                                        };
                                        readonly token0_amount: {
                                            readonly type: "number";
                                            readonly description: "The amount of the first token in the LP pair.";
                                            readonly examples: readonly [100];
                                        };
                                        readonly token0_amount_usd: {
                                            readonly type: "number";
                                            readonly description: "The equivalent amount in USD of the first token in the LP pair.";
                                            readonly examples: readonly [100];
                                        };
                                        readonly token0_name: {
                                            readonly type: "string";
                                            readonly description: "The name of the first token in the LP pair.";
                                            readonly examples: readonly ["Wrapped Ether"];
                                        };
                                        readonly token0_price_usd: {
                                            readonly type: "number";
                                            readonly description: "The price of the first token in the LP pair in USD.";
                                            readonly examples: readonly [100];
                                        };
                                        readonly token0_symbol: {
                                            readonly type: "string";
                                            readonly description: "The symbol of the first token in the LP pair.";
                                            readonly examples: readonly ["WETH"];
                                        };
                                        readonly token0_icon_link: {
                                            readonly type: "string";
                                            readonly description: "A link to the icon of the token involved in the transaction.";
                                            readonly examples: readonly ["https://logos.uniwhales.io/ethereum/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.jpg"];
                                        };
                                        readonly token1_address: {
                                            readonly type: "string";
                                            readonly description: "The address of the second token in the LP pair.";
                                            readonly examples: readonly ["0x7f5c764cbc14f9669b88837ca1490cca17c31607"];
                                        };
                                        readonly token1_amount: {
                                            readonly type: "number";
                                            readonly description: "The amount of the second token in the LP pair.";
                                            readonly examples: readonly [100];
                                        };
                                        readonly token1_amount_usd: {
                                            readonly type: "number";
                                            readonly description: "The equivalent amount in USD of the second token in the LP pair.";
                                            readonly examples: readonly [100];
                                        };
                                        readonly token1_name: {
                                            readonly type: "string";
                                            readonly description: "The name of the second token in the LP pair.";
                                            readonly examples: readonly ["Wrapped Ether"];
                                        };
                                        readonly token1_price_usd: {
                                            readonly type: "number";
                                            readonly description: "The price of the second token in the LP pair in USD.";
                                            readonly examples: readonly [100];
                                        };
                                        readonly token1_symbol: {
                                            readonly type: "string";
                                            readonly description: "The symbol of the second token in the LP pair.";
                                            readonly examples: readonly ["WETH"];
                                        };
                                        readonly token1_icon_link: {
                                            readonly type: "string";
                                            readonly description: "A link to the icon of the token involved in the transaction.";
                                            readonly examples: readonly ["https://logos.uniwhales.io/ethereum/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.jpg"];
                                        };
                                        readonly realized_pnl: {
                                            readonly type: "number";
                                            readonly description: "The realized profit and loss of the Perpetual transaction.";
                                            readonly examples: readonly [100];
                                        };
                                        readonly is_nft_perp: {
                                            readonly type: "boolean";
                                            readonly description: "Indicates whether the Perpetual transaction involves an NFT.";
                                            readonly examples: readonly [false];
                                        };
                                        readonly position_size: {
                                            readonly type: "number";
                                            readonly description: "The size of the position in the Perpetual transaction.";
                                            readonly examples: readonly [100];
                                        };
                                        readonly position_size_usd: {
                                            readonly type: "number";
                                            readonly description: "The equivalent amount in USD of the position size.";
                                            readonly examples: readonly [100];
                                        };
                                        readonly leverage: {
                                            readonly type: "number";
                                            readonly description: "The leverage used in the Perpetual transaction.";
                                            readonly examples: readonly [100];
                                        };
                                        readonly unrealized_pnl: {
                                            readonly type: "number";
                                            readonly description: "The unrealized profit and loss of the Perpetual transaction.";
                                            readonly examples: readonly [100];
                                        };
                                    };
                                    readonly required: readonly ["wallet", "wallet_label", "tx_hash", "tx_type", "chain", "index", "timestamp", "block", "action", "amount_usd", "average_price", "base_token_address", "base_token_amount", "base_token_symbol", "dex", "from", "liquidation", "liquidation_price", "to", "trade_direction", "perp_details", "token0_address", "token0_amount", "token0_amount_usd", "token0_name", "token0_price_usd", "token0_symbol", "token0_icon_link", "token1_address", "token1_amount", "token1_amount_usd", "token1_name", "token1_price_usd", "token1_symbol", "token1_icon_link", "realized_pnl", "is_nft_perp"];
                                }, {
                                    readonly type: "object";
                                    readonly description: "This object provides a structure for representing a flashloan event on the blockchain.";
                                    readonly properties: {
                                        readonly wallet: {
                                            readonly type: "string";
                                            readonly description: "The wallet address participating in the LP transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly wallet_label: {
                                            readonly type: "string";
                                            readonly description: "A human-readable label or name associated with the wallet, such as a ENS name.";
                                            readonly examples: readonly ["vitalik.eth"];
                                        };
                                        readonly tx_hash: {
                                            readonly type: "string";
                                            readonly description: "The unique transaction hash identifying this specific LP transaction.";
                                            readonly examples: readonly ["0xe0f84917036e7e2ebb2f8d73199547bde30d4d2918c67904a4bb200dc5bad215"];
                                        };
                                        readonly tx_type: {
                                            readonly type: "string";
                                            readonly description: "Indicates the type of transaction, in this case, liquidity pool (LP) related.";
                                            readonly examples: readonly ["lp"];
                                        };
                                        readonly chain: {
                                            readonly type: "string";
                                            readonly description: "The blockchain network (e.g., Ethereum, Optimism) where this transaction takes place.";
                                            readonly examples: readonly ["optimism"];
                                        };
                                        readonly index: {
                                            readonly type: "integer";
                                            readonly description: "A numerical index or identifier for the transaction.";
                                            readonly examples: readonly [10];
                                        };
                                        readonly timestamp: {
                                            readonly type: "integer";
                                            readonly description: "The timestamp marking when the transaction was executed.";
                                            readonly examples: readonly [1702899395];
                                        };
                                        readonly block: {
                                            readonly type: "integer";
                                            readonly description: "The block number on the blockchain where this transaction is recorded.";
                                            readonly examples: readonly [113650309];
                                        };
                                        readonly address: {
                                            readonly type: "string";
                                            readonly description: "The address of the token involved in the transaction.";
                                            readonly examples: readonly ["0x7f5c764cbc14f9669b88837ca1490cca17c31607"];
                                        };
                                        readonly amount: {
                                            readonly type: "number";
                                            readonly description: "The amount of tokens involved in the transaction.";
                                            readonly examples: readonly [100];
                                        };
                                        readonly amount_usd: {
                                            readonly type: "number";
                                            readonly description: "The equivalent amount in USD of the tokens involved in the transaction.";
                                            readonly examples: readonly [100];
                                        };
                                        readonly dex: {
                                            readonly type: "string";
                                            readonly description: "The decentralized exchange (DEX) where the flashloan transaction took place.";
                                            readonly examples: readonly ["Uniswap"];
                                        };
                                        readonly from: {
                                            readonly type: "string";
                                            readonly description: "The originating wallet address for the transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly health_factor: {
                                            readonly type: "number";
                                            readonly description: "The health factor of the wallet after the flashloan transaction.";
                                            readonly examples: readonly [1];
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly description: "The name of the token involved in the transaction.";
                                            readonly examples: readonly ["Wrapped Ether"];
                                        };
                                        readonly platform: {
                                            readonly type: "string";
                                            readonly description: "The platform where the flashloan transaction took place.";
                                            readonly examples: readonly ["Aave"];
                                        };
                                        readonly price_usd: {
                                            readonly type: "number";
                                            readonly description: "The price of the token in USD.";
                                            readonly examples: readonly [100];
                                        };
                                        readonly symbol: {
                                            readonly type: "string";
                                            readonly description: "The symbol of the token involved in the transaction.";
                                            readonly examples: readonly ["ETH"];
                                        };
                                        readonly token_icon_link: {
                                            readonly type: "string";
                                            readonly description: "A link to the icon of the token involved in the transaction.";
                                            readonly examples: readonly ["https://logos.uniwhales.io/ethereum/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.jpg"];
                                        };
                                    };
                                    readonly required: readonly ["wallet", "wallet_label", "tx_hash", "tx_type", "chain", "index", "timestamp", "block", "address", "amount", "amount_usd", "dex", "from", "health_factor", "name", "platform", "price_usd", "symbol", "token_icon_link"];
                                }, {
                                    readonly type: "object";
                                    readonly description: "This object provides a structure for representing a contract creation event on the blockchain.";
                                    readonly properties: {
                                        readonly wallet: {
                                            readonly type: "string";
                                            readonly description: "The wallet address participating in the LP transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly wallet_label: {
                                            readonly type: "string";
                                            readonly description: "A human-readable label or name associated with the wallet, such as a ENS name.";
                                            readonly examples: readonly ["vitalik.eth"];
                                        };
                                        readonly tx_hash: {
                                            readonly type: "string";
                                            readonly description: "The unique transaction hash identifying this specific LP transaction.";
                                            readonly examples: readonly ["0xe0f84917036e7e2ebb2f8d73199547bde30d4d2918c67904a4bb200dc5bad215"];
                                        };
                                        readonly tx_type: {
                                            readonly type: "string";
                                            readonly description: "Indicates the type of transaction, in this case, liquidity pool (LP) related.";
                                            readonly examples: readonly ["lp"];
                                        };
                                        readonly chain: {
                                            readonly type: "string";
                                            readonly description: "The blockchain network (e.g., Ethereum, Optimism) where this transaction takes place.";
                                            readonly examples: readonly ["optimism"];
                                        };
                                        readonly index: {
                                            readonly type: "integer";
                                            readonly description: "A numerical index or identifier for the transaction.";
                                            readonly examples: readonly [10];
                                        };
                                        readonly timestamp: {
                                            readonly type: "integer";
                                            readonly description: "The timestamp marking when the transaction was executed.";
                                            readonly examples: readonly [1702899395];
                                        };
                                        readonly block: {
                                            readonly type: "integer";
                                            readonly description: "The block number on the blockchain where this transaction is recorded.";
                                            readonly examples: readonly [113650309];
                                        };
                                        readonly amount_usd: {
                                            readonly type: "number";
                                            readonly description: "The equivalent amount in USD of the wrapped tokens.";
                                            readonly examples: readonly ["100.0"];
                                        };
                                        readonly contract_address: {
                                            readonly type: "string";
                                            readonly description: "The address of the smart contract involved in the interaction.";
                                            readonly examples: readonly ["0x7f5c764cbc14f9669b88837ca1490cca17c31607"];
                                        };
                                        readonly from: {
                                            readonly type: "string";
                                            readonly description: "The originating wallet address for the transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly from_label: {
                                            readonly type: "string";
                                            readonly description: "A human-readable label or name associated with the originating wallet.";
                                            readonly examples: readonly ["Alice"];
                                        };
                                    };
                                    readonly required: readonly ["wallet", "wallet_label", "tx_hash", "tx_type", "chain", "index", "timestamp", "block", "amount_usd", "contract_address", "from", "from_label"];
                                }, {
                                    readonly type: "object";
                                    readonly description: "This object provides a structure for representing a NFT liquidation event on the blockchain.";
                                    readonly properties: {
                                        readonly wallet: {
                                            readonly type: "string";
                                            readonly description: "The wallet address participating in the LP transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly wallet_label: {
                                            readonly type: "string";
                                            readonly description: "A human-readable label or name associated with the wallet, such as a ENS name.";
                                            readonly examples: readonly ["vitalik.eth"];
                                        };
                                        readonly tx_hash: {
                                            readonly type: "string";
                                            readonly description: "The unique transaction hash identifying this specific LP transaction.";
                                            readonly examples: readonly ["0xe0f84917036e7e2ebb2f8d73199547bde30d4d2918c67904a4bb200dc5bad215"];
                                        };
                                        readonly tx_type: {
                                            readonly type: "string";
                                            readonly description: "Indicates the type of transaction, in this case, liquidity pool (LP) related.";
                                            readonly examples: readonly ["lp"];
                                        };
                                        readonly chain: {
                                            readonly type: "string";
                                            readonly description: "The blockchain network (e.g., Ethereum, Optimism) where this transaction takes place.";
                                            readonly examples: readonly ["optimism"];
                                        };
                                        readonly index: {
                                            readonly type: "integer";
                                            readonly description: "A numerical index or identifier for the transaction.";
                                            readonly examples: readonly [10];
                                        };
                                        readonly timestamp: {
                                            readonly type: "integer";
                                            readonly description: "The timestamp marking when the transaction was executed.";
                                            readonly examples: readonly [1702899395];
                                        };
                                        readonly block: {
                                            readonly type: "integer";
                                            readonly description: "The block number on the blockchain where this transaction is recorded.";
                                            readonly examples: readonly [113650309];
                                        };
                                        readonly contract_address: {
                                            readonly type: "string";
                                            readonly description: "The address of the NFT contract involved in the interaction.";
                                            readonly examples: readonly ["0x7f5c764cbc14f9669b88837ca1490cca17c31607"];
                                        };
                                        readonly currency_address: {
                                            readonly type: "string";
                                            readonly description: "The address of the currency involved in the transaction.";
                                            readonly examples: readonly ["0x7f5c764cbc14f9669b88837ca1490cca17c31607"];
                                        };
                                        readonly currency_symbol: {
                                            readonly type: "string";
                                            readonly description: "The symbol of the currency involved in the transaction.";
                                            readonly examples: readonly ["ETH"];
                                        };
                                        readonly dex: {
                                            readonly type: "string";
                                            readonly description: "The decentralized exchange where the wrap transaction occurred.";
                                            readonly examples: readonly ["Uniswap"];
                                        };
                                        readonly from: {
                                            readonly type: "string";
                                            readonly description: "The originating wallet address for the transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly nft_address: {
                                            readonly type: "string";
                                            readonly description: "The address of the NFT contract involved in the interaction.";
                                            readonly examples: readonly ["0x7f5c764cbc14f9669b88837ca1490cca17c31607"];
                                        };
                                        readonly nft_name: {
                                            readonly type: "string";
                                            readonly description: "The name of the NFT in the transaction.";
                                            readonly examples: readonly ["NFT"];
                                        };
                                        readonly nft_symbol: {
                                            readonly type: "string";
                                            readonly description: "The symbol of the NFT in the transaction.";
                                            readonly examples: readonly ["NFT"];
                                        };
                                        readonly platform: {
                                            readonly type: "string";
                                            readonly description: "The platform where the flashloan transaction took place.";
                                            readonly examples: readonly ["Aave"];
                                        };
                                        readonly price: {
                                            readonly type: "number";
                                            readonly description: "The price of the NFT in the transaction.";
                                            readonly examples: readonly [100];
                                        };
                                        readonly price_usd: {
                                            readonly type: "number";
                                            readonly description: "The price of the NFT in USD.";
                                            readonly examples: readonly [100];
                                        };
                                        readonly to: {
                                            readonly type: "string";
                                            readonly description: "The destination wallet address for the transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly token_id: {
                                            readonly type: "string";
                                            readonly description: "The unique identifier of the NFT in the transaction.";
                                            readonly examples: readonly ["1"];
                                        };
                                    };
                                    readonly required: readonly ["wallet", "wallet_label", "tx_hash", "tx_type", "chain", "index", "timestamp", "block", "contract_address", "currency_address", "currency_symbol", "dex", "from", "nft_address", "nft_name", "nft_symbol", "platform", "price", "price_usd", "to", "token_id"];
                                }, {
                                    readonly type: "object";
                                    readonly description: "This object provides a structure for representing an option event on the blockchain.";
                                    readonly properties: {
                                        readonly wallet: {
                                            readonly type: "string";
                                            readonly description: "The wallet address participating in the LP transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly wallet_label: {
                                            readonly type: "string";
                                            readonly description: "A human-readable label or name associated with the wallet, such as a ENS name.";
                                            readonly examples: readonly ["vitalik.eth"];
                                        };
                                        readonly tx_hash: {
                                            readonly type: "string";
                                            readonly description: "The unique transaction hash identifying this specific LP transaction.";
                                            readonly examples: readonly ["0xe0f84917036e7e2ebb2f8d73199547bde30d4d2918c67904a4bb200dc5bad215"];
                                        };
                                        readonly tx_type: {
                                            readonly type: "string";
                                            readonly description: "Indicates the type of transaction, in this case, liquidity pool (LP) related.";
                                            readonly examples: readonly ["lp"];
                                        };
                                        readonly chain: {
                                            readonly type: "string";
                                            readonly description: "The blockchain network (e.g., Ethereum, Optimism) where this transaction takes place.";
                                            readonly examples: readonly ["optimism"];
                                        };
                                        readonly index: {
                                            readonly type: "integer";
                                            readonly description: "A numerical index or identifier for the transaction.";
                                            readonly examples: readonly [10];
                                        };
                                        readonly timestamp: {
                                            readonly type: "integer";
                                            readonly description: "The timestamp marking when the transaction was executed.";
                                            readonly examples: readonly [1702899395];
                                        };
                                        readonly block: {
                                            readonly type: "integer";
                                            readonly description: "The block number on the blockchain where this transaction is recorded.";
                                            readonly examples: readonly [113650309];
                                        };
                                        readonly action: {
                                            readonly type: "string";
                                            readonly description: "The action taken in the option event.";
                                            readonly examples: readonly ["buy"];
                                        };
                                        readonly amount: {
                                            readonly type: "number";
                                            readonly description: "The amount of tokens involved in the transaction.";
                                            readonly examples: readonly [100];
                                        };
                                        readonly asset: {
                                            readonly type: "string";
                                            readonly description: "The asset involved in the option event.";
                                            readonly examples: readonly ["ETH"];
                                        };
                                        readonly dex: {
                                            readonly type: "string";
                                            readonly description: "The decentralized exchange (DEX) where the option event took place.";
                                            readonly examples: readonly ["Uniswap"];
                                        };
                                        readonly direction: {
                                            readonly type: "string";
                                            readonly description: "The direction of the option event.";
                                            readonly examples: readonly ["call"];
                                        };
                                        readonly expiry: {
                                            readonly type: "string";
                                            readonly description: "The expiry date of the option.";
                                            readonly examples: readonly ["2022-12-31"];
                                        };
                                        readonly from: {
                                            readonly type: "string";
                                            readonly description: "The originating wallet address for the transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly option_price_usd: {
                                            readonly type: "number";
                                            readonly description: "The price of the option in USD.";
                                            readonly examples: readonly [100];
                                        };
                                        readonly position_status: {
                                            readonly type: "string";
                                            readonly description: "The status of the option position.";
                                            readonly examples: readonly ["open"];
                                        };
                                        readonly spot_price_usd: {
                                            readonly type: "number";
                                            readonly description: "The spot price of the asset in USD.";
                                            readonly examples: readonly [100];
                                        };
                                        readonly status: {
                                            readonly type: "string";
                                            readonly description: "The status of the option event.";
                                            readonly examples: readonly ["active"];
                                        };
                                        readonly strike_price_usd: {
                                            readonly type: "number";
                                            readonly description: "The strike price of the option in USD.";
                                            readonly examples: readonly [100];
                                        };
                                        readonly to: {
                                            readonly type: "string";
                                            readonly description: "The destination wallet address for the transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly type: {
                                            readonly type: "string";
                                            readonly description: "The type of option event.";
                                            readonly examples: readonly ["call"];
                                        };
                                    };
                                    readonly required: readonly ["wallet", "wallet_label", "tx_hash", "tx_type", "chain", "index", "timestamp", "block", "action", "amount", "asset", "dex", "direction", "expiry", "from", "option_price_usd", "position_status", "spot_price_usd", "status", "strike_price_usd", "to", "type"];
                                }, {
                                    readonly type: "object";
                                    readonly description: "This object provides a structure for representing a NFT sweep event on the blockchain.";
                                    readonly properties: {
                                        readonly wallet: {
                                            readonly type: "string";
                                            readonly description: "The wallet address involved in the NFT trading transaction.";
                                            readonly examples: readonly ["0xb4fb31e7b1471a8e52dd1e962a281a732ead59c1"];
                                        };
                                        readonly wallet_label: {
                                            readonly type: "string";
                                            readonly description: "A readable label for the wallet address.";
                                            readonly examples: readonly ["0xa4c8...f9457d"];
                                        };
                                        readonly tx_hash: {
                                            readonly type: "string";
                                            readonly description: "The unique hash identifier of the NFT trading transaction.";
                                            readonly examples: readonly ["0xe0f84917036e7e2ebb2f8d73199547bde30d4d2918c67904a4bb200dc5bad215"];
                                        };
                                        readonly tx_type: {
                                            readonly type: "string";
                                            readonly description: "Specifies the type of transaction, in this case, NFT trading.";
                                            readonly examples: readonly ["nft_trade"];
                                        };
                                        readonly chain: {
                                            readonly type: "string";
                                            readonly description: "The blockchain network where the trading transaction occurred.";
                                            readonly examples: readonly ["ethereum"];
                                        };
                                        readonly index: {
                                            readonly type: "integer";
                                            readonly description: "A numerical index or identifier for the transaction.";
                                            readonly examples: readonly [10];
                                        };
                                        readonly timestamp: {
                                            readonly type: "integer";
                                            readonly description: "The timestamp marking when the transaction was executed.";
                                            readonly examples: readonly [1702899395];
                                        };
                                        readonly block: {
                                            readonly type: "integer";
                                            readonly description: "The block number on the blockchain where this transaction is recorded.";
                                            readonly examples: readonly [113650309];
                                        };
                                        readonly from: {
                                            readonly type: "string";
                                            readonly description: "The originating wallet address of the transaction.";
                                            readonly examples: readonly ["0xebc18d25d8122da21f73a6bcb78971671f21f6ff"];
                                        };
                                        readonly to: {
                                            readonly type: "string";
                                            readonly description: "The destination wallet address of the transaction.";
                                            readonly examples: readonly ["0xcfdbdb8723619bca23765e09d59c8f745366f8ff"];
                                        };
                                        readonly thumbnail: {
                                            readonly type: "string";
                                            readonly description: "A thumbnail image URL of the NFT involved in the transaction.";
                                            readonly examples: readonly ["https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/matic-mainnet/284ed679247466683591389baddcfc9b"];
                                        };
                                        readonly image: {
                                            readonly type: "string";
                                            readonly description: "A full image URL of the NFT.";
                                            readonly examples: readonly ["https://nft-cdn.alchemy.com/matic-mainnet/284ed679247466683591389baddcfc9b"];
                                        };
                                        readonly action: {
                                            readonly type: "string";
                                            readonly description: "Describes the action taken in the NFT trade, such as 'buy' or 'sell'.";
                                            readonly examples: readonly ["buy"];
                                        };
                                        readonly contract: {
                                            readonly type: "string";
                                            readonly description: "The blockchain contract address associated with the NFT.";
                                            readonly examples: readonly ["0x00000000000000adc04c56bf30ac9d3c0aaf14dc"];
                                        };
                                        readonly marketplace: {
                                            readonly type: "string";
                                            readonly description: "The marketplace where the NFT trade occurred, such as OpenSea.";
                                            readonly examples: readonly ["OpenSea"];
                                        };
                                        readonly nft_address: {
                                            readonly type: "string";
                                            readonly description: "The blockchain address of the NFT involved in the trade.";
                                            readonly examples: readonly ["0xbe9371326f91345777b04394448c23e2bfeaa826"];
                                        };
                                        readonly nft_name: {
                                            readonly type: "string";
                                            readonly description: "The name of the NFT traded.";
                                            readonly examples: readonly ["Gemesis"];
                                        };
                                        readonly nft_symbol: {
                                            readonly type: "string";
                                            readonly description: "The symbol associated with the NFT.";
                                            readonly examples: readonly ["OSP"];
                                        };
                                        readonly nft_token_id: {
                                            readonly type: "string";
                                            readonly description: "The unique token ID of the NFT involved in the trade.";
                                            readonly examples: readonly [32507];
                                        };
                                        readonly price: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The price at which the NFT was traded.";
                                            readonly examples: readonly [0.0151];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly price_usd: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The equivalent USD value of the NFT trade.";
                                            readonly examples: readonly [32.911356];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly profit: {
                                            readonly type: "number";
                                            readonly format: "double";
                                            readonly description: "The profit earned from the trade. This may be zero in some transactions.";
                                            readonly examples: readonly [0];
                                            readonly minimum: -1.7976931348623157e+308;
                                            readonly maximum: 1.7976931348623157e+308;
                                        };
                                        readonly currency_symbol: {
                                            readonly type: "string";
                                            readonly description: "The symbol of the currency used in the trade, such as WETH or ETH.";
                                            readonly examples: readonly ["WETH"];
                                        };
                                        readonly buyer: {
                                            readonly type: "string";
                                            readonly description: "The wallet address of the buyer in the trade.";
                                        };
                                        readonly seller: {
                                            readonly type: "string";
                                            readonly description: "The wallet address of the seller in the trade.";
                                        };
                                        readonly token: {
                                            readonly type: "string";
                                            readonly description: "The token type used in the transaction.";
                                        };
                                        readonly first_interaction: {
                                            readonly type: "boolean";
                                            readonly description: "Indicates whether this was the first interaction between the buyer and seller.";
                                        };
                                        readonly bid_accepted: {
                                            readonly type: "boolean";
                                            readonly description: "Specifies if the transaction involved a bid being accepted.";
                                        };
                                    };
                                    readonly required: readonly ["wallet", "wallet_label", "tx_hash", "tx_type", "chain", "index", "timestamp", "block", "from", "to", "thumbnail", "image", "action", "contract", "marketplace", "nft_address", "nft_name", "nft_symbol", "nft_token_id", "price", "price_usd", "profit", "currency_symbol", "buyer", "seller", "token", "first_interaction", "bid_accepted"];
                                }];
                            };
                        };
                        readonly paging: {
                            readonly type: "object";
                            readonly description: "Provides details about pagination, indicating the total number of rows on the current page, whether a next page exists, and the identifier for the next object.";
                            readonly properties: {
                                readonly total_rows_in_page: {
                                    readonly type: "integer";
                                    readonly minimum: 0;
                                    readonly description: "The total number of rows present in the current page of the response.";
                                    readonly examples: readonly [10];
                                };
                                readonly has_next_page: {
                                    readonly type: "boolean";
                                    readonly description: "A boolean flag indicating if there is a subsequent page available after the current page.";
                                    readonly examples: readonly [true];
                                };
                                readonly next_object: {
                                    readonly type: "string";
                                    readonly description: "An identifier for the next object or page, used for pagination purposes.";
                                };
                            };
                            readonly required: readonly ["total_rows_in_page", "has_next_page"];
                        };
                    };
                    readonly required: readonly ["items", "paging"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message accompanying the response, often used to provide additional information or context about the results or the status of the request.";
                };
            };
            readonly required: readonly ["status", "data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetNftsPnl: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly wallet: {
                    readonly type: "string";
                    readonly examples: readonly ["0x0f9d76acdbc4417b026f876be1e2042e45f3bcd2"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Get NFT P&L values for wallet.";
                };
            };
            readonly required: readonly ["wallet"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly timeframe: {
                    readonly type: "string";
                    readonly examples: readonly ["5d"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set time range for filtering data, number of days from 1d to max. Default - max timeframe.";
                };
                readonly next_object: {
                    readonly type: "string";
                    readonly examples: readonly [4];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Next page for pagination.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly description: "The response schema for the /v1/nftss_pnl endpoint.";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the standard response status object, which indicates the success or failure of the API request.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "Contains the main data of the response, including a list of Nft PnL items and pagination details.";
                    readonly properties: {
                        readonly items: {
                            readonly type: "array";
                            readonly description: "An array of Nft PnL items, each providing detailed information on token transactions and performance.";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly num_swaps: {
                                        readonly type: "integer";
                                        readonly format: "int64";
                                        readonly minimum: -9223372036854776000;
                                        readonly maximum: 9223372036854776000;
                                    };
                                    readonly total_buy_amount: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly total_sell_amount: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly total_buy_avg: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly total_sell_avg: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly total_buy_usd: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly total_sell_usd: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly profit_loss: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly roi_percentage: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly chain: {
                                        readonly type: "string";
                                    };
                                    readonly token_address: {
                                        readonly type: "string";
                                    };
                                    readonly nft_symbol: {
                                        readonly type: "string";
                                    };
                                    readonly nft_name: {
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                        readonly paging: {
                            readonly type: "object";
                            readonly properties: {
                                readonly total_rows_in_page: {
                                    readonly type: "integer";
                                    readonly format: "int32";
                                    readonly minimum: -2147483648;
                                    readonly maximum: 2147483647;
                                };
                                readonly has_next_page: {
                                    readonly type: "boolean";
                                };
                                readonly next_object: {
                                    readonly type: "string";
                                };
                            };
                            readonly required: readonly ["total_rows_in_page", "has_next_page"];
                        };
                    };
                    readonly required: readonly ["items", "paging"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message accompanying the response, often used to provide additional information or context about the results or the status of the request.";
                };
            };
            readonly required: readonly ["status", "data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetRelatedWallets: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly wallet: {
                    readonly type: "string";
                    readonly examples: readonly ["0x0f9d76acdbc4417b026f876be1e2042e45f3bcd2"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Get related wallets for wallet.";
                };
            };
            readonly required: readonly ["wallet"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly sort_criteria: {
                    readonly type: "string";
                    readonly enum: readonly ["inflow_asc", "inflow_desc", "outflow_asc", "outflow_desc", "transactions_asc", "transactions_desc"];
                    readonly examples: readonly ["inflow_asc"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort wallets by the specified criteria.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly description: "The response schema for the /v1/{wallet}/related-wallets endpoint.";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the standard response status object, which indicates the success or failure of the API request.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "Contains the main data of the response.";
                    readonly properties: {
                        readonly related_wallets: {
                            readonly type: "array";
                            readonly description: "An array of related wallets associated with the wallet address.";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly wallet: {
                                        readonly type: "string";
                                        readonly description: "The wallet address for which the related wallets are provided.";
                                        readonly examples: readonly ["0x0f9d76acdbc4417b026f876be1e2042e45f3bcd2"];
                                    };
                                    readonly inflow_usd: {
                                        readonly type: "integer";
                                        readonly description: "The total inflow in usd for the specified wallet.";
                                        readonly examples: readonly [10000];
                                    };
                                    readonly outflow_usd: {
                                        readonly type: "integer";
                                        readonly description: "The total outflow in usd for the specified wallet.";
                                        readonly examples: readonly [15000];
                                    };
                                    readonly total_usd: {
                                        readonly type: "integer";
                                        readonly description: "The total inflow and outflow in usd for the specified wallet.";
                                        readonly examples: readonly [25000];
                                    };
                                    readonly count: {
                                        readonly type: "integer";
                                        readonly description: "The total number of transactions for the specified wallet.";
                                        readonly examples: readonly [2];
                                    };
                                    readonly label: {
                                        readonly type: "string";
                                        readonly description: "The label for the related wallet.";
                                        readonly examples: readonly ["Wallet Name"];
                                    };
                                };
                            };
                        };
                    };
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message accompanying the response, often used to provide additional information or context about the results or the status of the request.";
                };
            };
            readonly required: readonly ["status", "data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTokensPnl: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly wallet: {
                    readonly type: "string";
                    readonly examples: readonly ["0x0f9d76acdbc4417b026f876be1e2042e45f3bcd2"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Get P&L values for wallet.";
                };
            };
            readonly required: readonly ["wallet"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly chains: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly examples: readonly ["ethereum", "base", "arbitrum"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter data by specific blockchain chains (e.g. ethereum), comma-separated for multiple values (e.g, ethereum,polygon)";
                };
                readonly timeframe: {
                    readonly type: "string";
                    readonly examples: readonly ["5d"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set time range for filtering data, number of days from 1d to max. Default - max timeframe.";
                };
                readonly next_object: {
                    readonly type: "string";
                    readonly examples: readonly [4];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Next page for pagination.";
                };
                readonly token: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly examples: readonly ["PEPECAT", "FfhArvgv8WB7eZ6qwENMouJRzcVpQVDoDtTuHrCk4Cxi"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter data by specific tokens (e.g. PEPECAT or FfhArvgv8WB7eZ6qwENMouJRzcVpQVDoDtTuHrCk4Cxi), comma-separated for multiple values (e.g, usdc,usdt)";
                };
                readonly cex_transfers: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Include cex transfers for calculating P&L. Default - false.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly description: "The response schema for the /v1/tokens_pnl endpoint.";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the standard response status object, which indicates the success or failure of the API request.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "Contains the main data of the response, including a list of tokens PNL items and pagination details.";
                    readonly properties: {
                        readonly items: {
                            readonly type: "array";
                            readonly description: "An array of tokens PNL items, each providing detailed information on token transactions and performance.";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly num_swaps: {
                                        readonly type: "integer";
                                        readonly format: "int64";
                                        readonly minimum: -9223372036854776000;
                                        readonly maximum: 9223372036854776000;
                                    };
                                    readonly total_buy_usd: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly total_buy_amount: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly total_sell_usd: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly total_sell_amount: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly average_buy_price: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly average_sell_price: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly total_pnl_usd: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly roi_percentage: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly unrealized_pnl_usd: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly unrealized_roi_percentage: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly token_price: {
                                        readonly type: "number";
                                        readonly format: "double";
                                        readonly minimum: -1.7976931348623157e+308;
                                        readonly maximum: 1.7976931348623157e+308;
                                    };
                                    readonly token_address: {
                                        readonly type: "string";
                                    };
                                    readonly token_symbol: {
                                        readonly type: "string";
                                    };
                                    readonly token_name: {
                                        readonly type: "string";
                                    };
                                    readonly chain: {
                                        readonly type: "string";
                                    };
                                    readonly is_honeypot: {
                                        readonly type: "boolean";
                                    };
                                };
                            };
                        };
                        readonly paging: {
                            readonly type: "object";
                            readonly properties: {
                                readonly total_rows_in_page: {
                                    readonly type: "integer";
                                    readonly format: "int32";
                                    readonly minimum: -2147483648;
                                    readonly maximum: 2147483647;
                                };
                                readonly has_next_page: {
                                    readonly type: "boolean";
                                };
                                readonly next_object: {
                                    readonly type: "string";
                                };
                            };
                            readonly required: readonly ["total_rows_in_page", "has_next_page"];
                        };
                    };
                    readonly required: readonly ["items", "paging"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message accompanying the response, often used to provide additional information or context about the results or the status of the request.";
                };
            };
            readonly required: readonly ["status", "data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTotalStats: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly wallet: {
                    readonly type: "string";
                    readonly examples: readonly ["0x0f9d76acdbc4417b026f876be1e2042e45f3bcd2"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Get tags associated with wallet.";
                };
            };
            readonly required: readonly ["wallet"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly chains: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly examples: readonly ["ethereum", "base", "arbitrum"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter transactions by specific blockchain chains (e.g. ethereum), comma-separated for multiple values (e.g, ethereum,polygon)";
                };
                readonly timeframe: {
                    readonly type: "string";
                    readonly examples: readonly ["7d"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Set time range for filtering data, number of days from 1d, 7d or 30d. Default - max timeframe.";
                };
                readonly cex_transfers: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Include CEX transfers in the response.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly description: "The response schema for the /v1/{wallet}/pnl/total-stats endpoint.";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the standard response status object, which indicates the success or failure of the API request.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "Contains the main data of the response, including aggregated PnL stats for the specified wallet.";
                    readonly properties: {
                        readonly wallet: {
                            readonly type: "string";
                            readonly description: "The wallet address for which the PnL stats are provided.";
                            readonly examples: readonly ["6sdb5o3XWM27RSjcYqoVZ88ruuPzHTfqFQEq26nN6eVq"];
                        };
                        readonly realized_pnl_usd: {
                            readonly type: "integer";
                            readonly format: "float64";
                            readonly description: "The total PnL in usd for the specified wallet.";
                            readonly examples: readonly [10000];
                        };
                        readonly realized_roi_percentage: {
                            readonly type: "integer";
                            readonly format: "float64";
                            readonly description: "The total ROI percentage for the specified wallet.";
                            readonly examples: readonly [52.2];
                        };
                        readonly tokens_traded: {
                            readonly type: "integer";
                            readonly format: "float64";
                            readonly description: "The total number of tokens traded for the specified wallet.";
                            readonly examples: readonly [25];
                        };
                        readonly unrealized_pnl_usd: {
                            readonly type: "integer";
                            readonly format: "float64";
                            readonly description: "The total unrealized PnL in usd for the specified wallet.";
                            readonly examples: readonly [5000];
                        };
                        readonly unrealized_roi_percentage: {
                            readonly type: "integer";
                            readonly format: "float64";
                            readonly description: "The total unrealized ROI percentage for the specified wallet.";
                            readonly examples: readonly [75.2];
                        };
                        readonly winrate: {
                            readonly type: "integer";
                            readonly format: "float64";
                            readonly description: "The winrate percentage for the specified wallet.";
                            readonly examples: readonly [53.5];
                        };
                        readonly average_holding_time: {
                            readonly type: "integer";
                            readonly format: "float64";
                            readonly description: "The average holding time for the specified wallet in hours.";
                            readonly examples: readonly [5];
                        };
                        readonly combined_pnl_usd: {
                            readonly type: "integer";
                            readonly format: "float64";
                            readonly description: "The combined PnL in usd for the specified wallet.";
                            readonly examples: readonly [15000];
                        };
                        readonly combined_roi_percentage: {
                            readonly type: "integer";
                            readonly format: "float64";
                            readonly description: "The combined ROI percentage for the specified wallet.";
                            readonly examples: readonly [127.4];
                        };
                    };
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message accompanying the response, often used to provide additional information or context about the results or the status of the request.";
                };
            };
            readonly required: readonly ["status", "data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetTrackedWallets: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly next_object: {
                    readonly type: "string";
                    readonly examples: readonly [4];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Next page for pagination.";
                };
                readonly list_id: {
                    readonly type: "integer";
                    readonly examples: readonly [123];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the list to filter by.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly description: "The response schema for the /api/v1/tracked-wallets endpoint.";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the standard response status object, which indicates the success or failure of the API request.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "Contains the main data of the response.";
                    readonly properties: {
                        readonly tracked_wallets: {
                            readonly type: "array";
                            readonly description: "An array of tracked wallets.";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "number";
                                        readonly description: "The unique identifier for the tracked wallet.";
                                        readonly examples: readonly [1];
                                    };
                                    readonly wallet: {
                                        readonly type: "string";
                                        readonly description: "The wallet address for which the related wallets are provided.";
                                        readonly examples: readonly ["0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2"];
                                    };
                                    readonly label: {
                                        readonly type: "string";
                                        readonly description: "The label for the related wallet.";
                                        readonly examples: readonly ["Wallet Name"];
                                    };
                                    readonly type: {
                                        readonly type: "object";
                                        readonly description: "Enumerates the different types of wallets.\n\n`unknown` `evm` `solana` `dydx` `bitcoin`";
                                        readonly enum: readonly ["unknown", "evm", "solana", "dydx", "bitcoin"];
                                        readonly additionalProperties: true;
                                    };
                                    readonly list_id: {
                                        readonly type: "number";
                                        readonly description: "The list id for the tracked wallet.";
                                        readonly examples: readonly [1];
                                    };
                                    readonly list: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "integer";
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                            };
                                            readonly created_at: {
                                                readonly type: "integer";
                                            };
                                            readonly bot_id: {
                                                readonly type: "integer";
                                            };
                                            readonly description: {
                                                readonly type: "string";
                                            };
                                            readonly is_public: {
                                                readonly type: "boolean";
                                            };
                                            readonly followed_count: {
                                                readonly type: "integer";
                                            };
                                            readonly wallets_count: {
                                                readonly type: "integer";
                                            };
                                            readonly share_url: {
                                                readonly type: "string";
                                            };
                                            readonly image_url: {
                                                readonly type: "string";
                                            };
                                            readonly followed: {
                                                readonly type: "boolean";
                                            };
                                            readonly is_creator: {
                                                readonly type: "boolean";
                                            };
                                        };
                                        readonly required: readonly ["name", "created_at", "bot_id", "description", "is_public", "followed_count", "wallets_count", "share_url", "image_url", "followed", "is_creator"];
                                    };
                                };
                                readonly required: readonly ["id", "wallet", "label", "type"];
                            };
                        };
                        readonly Paging: {
                            readonly type: "object";
                            readonly properties: {
                                readonly total_rows_in_page: {
                                    readonly type: "number";
                                    readonly description: "The total number of rows in the current page.";
                                    readonly examples: readonly [10];
                                };
                                readonly has_next_page: {
                                    readonly type: "boolean";
                                    readonly description: "Indicates whether there is a next page of results.";
                                    readonly examples: readonly [true];
                                };
                                readonly next_object: {
                                    readonly type: "number";
                                    readonly description: "The index of the next object in the result set.";
                                    readonly examples: readonly [11];
                                };
                            };
                            readonly required: readonly ["total_rows_in_page", "has_next_page", "next_object"];
                        };
                    };
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message accompanying the response, often used to provide additional information or context about the results or the status of the request.";
                };
            };
            readonly required: readonly ["status", "data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetUserLists: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly description: "The response schema for the /api/v1/lists endpoint.";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the standard response status object, which indicates the success or failure of the API request.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Contains the main data of the response.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "integer";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly created_at: {
                                readonly type: "integer";
                            };
                            readonly bot_id: {
                                readonly type: "integer";
                            };
                            readonly description: {
                                readonly type: "string";
                            };
                            readonly is_public: {
                                readonly type: "boolean";
                            };
                            readonly followed_count: {
                                readonly type: "integer";
                            };
                            readonly wallets_count: {
                                readonly type: "integer";
                            };
                            readonly share_url: {
                                readonly type: "string";
                            };
                            readonly image_url: {
                                readonly type: "string";
                            };
                            readonly followed: {
                                readonly type: "boolean";
                            };
                            readonly is_creator: {
                                readonly type: "boolean";
                            };
                        };
                        readonly required: readonly ["name", "created_at", "bot_id", "description", "is_public", "followed_count", "wallets_count", "share_url", "image_url", "followed", "is_creator"];
                    };
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message accompanying the response, often used to provide additional information or context about the results or the status of the request.";
                };
            };
            readonly required: readonly ["status", "data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetWalletTags: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly wallet: {
                    readonly type: "string";
                    readonly examples: readonly ["0x0f9d76acdbc4417b026f876be1e2042e45f3bcd2"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Get tags associated with wallet.";
                };
            };
            readonly required: readonly ["wallet"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly description: "The response schema for the /v1/{wallet}/tags endpoint.";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the standard response status object, which indicates the success or failure of the API request.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "Contains the main data of the response.";
                    readonly properties: {
                        readonly tags: {
                            readonly type: "array";
                            readonly description: "An array of tags associated with the wallet address.";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly key: {
                                        readonly description: "A unique identifier for the tag.\n\n`high_volume_dex_trader` `early_defi` `multichain` `new_wallet` `high_leverage_trader` `nft_trader` `nftfi` `nft_high_pnl` `popular_wallet` `airdrop_hunter` `gem_finder` `high_win_rate` `new_whale` `flipper` `honeypot` `mev`";
                                        readonly type: "string";
                                        readonly enum: readonly ["high_volume_dex_trader", "early_defi", "multichain", "new_wallet", "high_leverage_trader", "nft_trader", "nftfi", "nft_high_pnl", "popular_wallet", "airdrop_hunter", "gem_finder", "high_win_rate", "new_whale", "flipper", "honeypot", "mev"];
                                        readonly examples: readonly ["nft_trader"];
                                    };
                                    readonly tag: {
                                        readonly type: "string";
                                        readonly description: "The tag label or name.";
                                        readonly examples: readonly ["NFT Trader"];
                                    };
                                    readonly description: {
                                        readonly type: "string";
                                        readonly description: "A description of what the tag represents.";
                                        readonly examples: readonly ["More than 50 ETH volume trading NFTs"];
                                    };
                                };
                                readonly required: readonly ["key", "tag", "description"];
                            };
                        };
                    };
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message accompanying the response, often used to provide additional information or context about the results or the status of the request.";
                };
            };
            readonly required: readonly ["status", "data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetWalletsByTag: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly tags: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly enum: readonly ["high_volume_dex_trader", "early_defi", "multichain", "new_wallet", "high_leverage_trader", "nft_trader", "nftfi", "nft_high_pnl", "popular_wallet", "airdrop_hunter", "gem_finder", "high_win_rate", "new_whale", "flipper", "honeypot", "mev"];
                    };
                    readonly examples: readonly ["new_wallet", "flipper", "honeypot"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter wallets by a specific tag.";
                };
                readonly wallet_type: {
                    readonly type: "string";
                    readonly enum: readonly ["evm", "solana"];
                    readonly examples: readonly ["solana"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter wallets by a specific wallet type.";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly examples: readonly [10];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The number of wallets to return. The default is 20. The maximum value is 50.";
                };
                readonly next_object: {
                    readonly type: "string";
                    readonly examples: readonly [4];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Next page for pagination.";
                };
            };
            readonly required: readonly ["tags"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly description: "The response schema for the /v1/tags/wallets endpoint.";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the standard response status object, which indicates the success or failure of the API request.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "Contains the main data of the response.";
                    readonly properties: {
                        readonly items: {
                            readonly type: "array";
                            readonly description: "An array of related wallets associated with the wallet address.";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly wallet: {
                                        readonly type: "string";
                                        readonly description: "The wallet address for a wallet with the provided tags.";
                                        readonly examples: readonly ["0x0f9d76acdbc4417b026f876be1e2042e45f3bcd2"];
                                    };
                                    readonly wallet_type: {
                                        readonly type: "string";
                                        readonly enum: readonly ["evm", "solana"];
                                        readonly description: "The wallet type for the wallet returned.\n\n`evm` `solana`";
                                        readonly examples: readonly ["evm"];
                                    };
                                };
                            };
                        };
                        readonly paging: {
                            readonly type: "object";
                            readonly description: "Provides details about pagination, indicating the total number of rows on the current page, whether a next page exists, and the identifier for the next object.";
                            readonly properties: {
                                readonly next_page: {
                                    readonly type: "string";
                                    readonly description: "An identifier for the next page, used for pagination purposes.";
                                };
                                readonly has_next_page: {
                                    readonly type: "boolean";
                                    readonly description: "Indicates whether a next page exists.";
                                };
                            };
                            readonly required: readonly ["has_next_page"];
                        };
                    };
                    readonly required: readonly ["items", "paging"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message accompanying the response, often used to provide additional information or context about the results or the status of the request.";
                };
            };
            readonly required: readonly ["status", "data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetWalletsTags: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly wallet: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly examples: readonly ["0x0f9d76acdbc4417b026f876be1e2042e45f3bcd2"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Get tags associated with wallets in the list. Maximum of 50 wallets.";
                };
            };
            readonly required: readonly ["wallet"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly description: "The response schema for the /v1/tags endpoint.";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the standard response status object, which indicates the success or failure of the API request.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly description: "Contains the main data of the response.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly wallet: {
                                readonly type: "string";
                                readonly description: "The wallet address associated with the tags.";
                                readonly examples: readonly ["0x0f9d76acdbc4417b026f876be1e2042e45f3bcd2"];
                            };
                            readonly tags: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly key: {
                                        readonly description: "A unique identifier for the tag.\n\n`high_volume_dex_trader` `early_defi` `multichain` `new_wallet` `high_leverage_trader` `nft_trader` `nftfi` `nft_high_pnl` `popular_wallet` `airdrop_hunter` `gem_finder` `high_win_rate` `new_whale` `flipper` `honeypot` `mev`";
                                        readonly type: "string";
                                        readonly enum: readonly ["high_volume_dex_trader", "early_defi", "multichain", "new_wallet", "high_leverage_trader", "nft_trader", "nftfi", "nft_high_pnl", "popular_wallet", "airdrop_hunter", "gem_finder", "high_win_rate", "new_whale", "flipper", "honeypot", "mev"];
                                        readonly examples: readonly ["nft_trader"];
                                    };
                                    readonly tag: {
                                        readonly type: "string";
                                        readonly description: "The tag label or name.";
                                        readonly examples: readonly ["NFT Trader"];
                                    };
                                    readonly description: {
                                        readonly type: "string";
                                        readonly description: "A description of what the tag represents.";
                                        readonly examples: readonly ["More than 50 ETH volume trading NFTs"];
                                    };
                                };
                                readonly required: readonly ["key", "tag", "description"];
                            };
                        };
                    };
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message accompanying the response, often used to provide additional information or context about the results or the status of the request.";
                };
            };
            readonly required: readonly ["status", "data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetWebSocket: {
    readonly response: {
        readonly "101": {
            readonly type: "object";
            readonly properties: {
                readonly Upgrade: {
                    readonly type: "string";
                    readonly enum: readonly ["websocket"];
                    readonly default: "websocket";
                    readonly description: "The protocol to which the server is switching.";
                };
                readonly Connection: {
                    readonly type: "string";
                    readonly enum: readonly ["Upgrade"];
                    readonly default: "Upgrade";
                    readonly description: "Indicates that the server is willing to upgrade the connection.";
                };
                readonly "Sec-WebSocket-Accept": {
                    readonly type: "string";
                    readonly description: "A WebSocket-specific header used in the WebSocket handshake.";
                };
            };
        };
        readonly "403": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const RemoveTrackedWallets: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly wallet_ids: {
                readonly type: "array";
                readonly items: {
                    readonly type: "integer";
                };
                readonly description: "The list of wallet IDs to be removed from tracking";
            };
        };
        readonly required: readonly ["wallet_ids"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly description: "The response schema for the /api/v1/tracked-wallets endpoint.";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the standard response status object, which indicates the success or failure of the API request.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message accompanying the response, often used to provide additional information or context about the results or the status of the request.";
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ToggleFollowList: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly list_id: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the list to follow";
                };
            };
            readonly required: readonly ["list_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly description: "The response schema for the /api/v1/lists/{list_id}/toggle-follow endpoint.";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the standard response status object, which indicates the success or failure of the API request.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "Contains the main data of the response.";
                    readonly properties: {
                        readonly followed: {
                            readonly type: "boolean";
                            readonly description: "The follow status of the list.";
                        };
                    };
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message accompanying the response, often used to provide additional information or context about the results or the status of the request.";
                };
            };
            readonly required: readonly ["status", "data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateTrackedWallet: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly wallet: {
                readonly type: "string";
                readonly description: "The address of the wallet to be tracked";
            };
            readonly label: {
                readonly type: "string";
                readonly description: "A label for the tracked wallet";
            };
            readonly list_id: {
                readonly type: "integer";
                readonly description: "The ID of the list to add the wallet to";
            };
        };
        readonly required: readonly ["wallet", "label"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly wallet_id: {
                    readonly type: "integer";
                    readonly examples: readonly [123];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the wallet to update";
                };
            };
            readonly required: readonly ["wallet_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly description: "The response schema for the /api/v1/tracked-wallets/{wallet_id} endpoint.";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the standard response status object, which indicates the success or failure of the API request.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "number";
                            readonly description: "The unique identifier for the tracked wallet.";
                            readonly examples: readonly [1];
                        };
                        readonly wallet: {
                            readonly type: "string";
                            readonly description: "The wallet address for which the related wallets are provided.";
                            readonly examples: readonly ["0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2"];
                        };
                        readonly label: {
                            readonly type: "string";
                            readonly description: "The label for the related wallet.";
                            readonly examples: readonly ["Wallet Name"];
                        };
                        readonly type: {
                            readonly type: "object";
                            readonly description: "Enumerates the different types of wallets.\n\n`unknown` `evm` `solana` `dydx` `bitcoin`";
                            readonly enum: readonly ["unknown", "evm", "solana", "dydx", "bitcoin"];
                            readonly additionalProperties: true;
                        };
                        readonly list_id: {
                            readonly type: "number";
                            readonly description: "The list id for the tracked wallet.";
                            readonly examples: readonly [1];
                        };
                        readonly list: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly type: "integer";
                                };
                                readonly name: {
                                    readonly type: "string";
                                };
                                readonly created_at: {
                                    readonly type: "integer";
                                };
                                readonly bot_id: {
                                    readonly type: "integer";
                                };
                                readonly description: {
                                    readonly type: "string";
                                };
                                readonly is_public: {
                                    readonly type: "boolean";
                                };
                                readonly followed_count: {
                                    readonly type: "integer";
                                };
                                readonly wallets_count: {
                                    readonly type: "integer";
                                };
                                readonly share_url: {
                                    readonly type: "string";
                                };
                                readonly image_url: {
                                    readonly type: "string";
                                };
                                readonly followed: {
                                    readonly type: "boolean";
                                };
                                readonly is_creator: {
                                    readonly type: "boolean";
                                };
                            };
                            readonly required: readonly ["name", "created_at", "bot_id", "description", "is_public", "followed_count", "wallets_count", "share_url", "image_url", "followed", "is_creator"];
                        };
                    };
                    readonly required: readonly ["id", "wallet", "label", "type"];
                };
            };
            readonly required: readonly ["status", "data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateUserList: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
            };
            readonly is_public: {
                readonly type: "boolean";
            };
            readonly wallets: {
                readonly type: "array";
                readonly items: {
                    readonly type: "integer";
                };
            };
            readonly followed_list_id: {
                readonly type: "integer";
            };
            readonly description: {
                readonly type: "string";
            };
        };
        readonly required: readonly ["name"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly list_id: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ID of the list to update";
                };
            };
            readonly required: readonly ["list_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly description: "The response schema for the /api/v1/lists/{list_id} endpoint.";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the standard response status object, which indicates the success or failure of the API request.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "integer";
                        };
                        readonly name: {
                            readonly type: "string";
                        };
                        readonly created_at: {
                            readonly type: "integer";
                        };
                        readonly bot_id: {
                            readonly type: "integer";
                        };
                        readonly description: {
                            readonly type: "string";
                        };
                        readonly is_public: {
                            readonly type: "boolean";
                        };
                        readonly followed_count: {
                            readonly type: "integer";
                        };
                        readonly wallets_count: {
                            readonly type: "integer";
                        };
                        readonly share_url: {
                            readonly type: "string";
                        };
                        readonly image_url: {
                            readonly type: "string";
                        };
                        readonly followed: {
                            readonly type: "boolean";
                        };
                        readonly is_creator: {
                            readonly type: "boolean";
                        };
                    };
                    readonly required: readonly ["name", "created_at", "bot_id", "description", "is_public", "followed_count", "wallets_count", "share_url", "image_url", "followed", "is_creator"];
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message accompanying the response, often used to provide additional information or context about the results or the status of the request.";
                };
            };
            readonly required: readonly ["status", "data"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly description: "This object represents a response structure typically used to convey the outcome of a request. It primarily consists of a status indicator and a message, which together provide essential feedback about the request's processing. The status reflects the overall result of the request (such as success, error, etc.), while the message gives a more detailed explanation or the nature of the response, especially useful in cases of errors or exceptions.\n";
            readonly properties: {
                readonly status: {
                    readonly description: "A reference to the response status object. This status is a key indicator of whether the request was processed successfully or resulted in an error.\n\n`ok` `error`";
                    readonly type: "string";
                    readonly enum: readonly ["ok", "error"];
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "A flexible object intended to hold the actual data payload of the response. The structure of this object can vary depending on the specific endpoint and the nature of the response.";
                    readonly additionalProperties: true;
                };
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive message providing additional details about the response. In case of an error, this message typically contains information useful for understanding the error's cause or nature.";
                    readonly examples: readonly ["error message"];
                };
            };
            readonly required: readonly ["status", "message"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { AddTrackedWallet, AddUserList, DeleteUserList, GetAllLists, GetFeed, GetNftsPnl, GetRelatedWallets, GetTokensPnl, GetTotalStats, GetTrackedWallets, GetUserLists, GetWalletTags, GetWalletsByTag, GetWalletsTags, GetWebSocket, RemoveTrackedWallets, ToggleFollowList, UpdateTrackedWallet, UpdateUserList };
