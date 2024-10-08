import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values: string[] | number[]): this;
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url: string, variables?: {}): void;
    /**
     * This endpoint retrieves a feed of transactions based on specified query parameters.
     * When set to true, the response will include the market capitalization of tokens, as well
     * as liquidity swap and transfer events.  Note that enabling this option will double the
     * cost per request to 10 credits. If the query is filtered by wallet address, the cost
     * will increase to 6 credits per request.
     * ### Filters
     * - **Wallet Address**: Filter transactions by wallet address.
     * - **Number of Transactions (limit)**: Specify the number of transactions to retrieve.
     * - **Specific Lists**: Filter transactions by specific lists.
     * - **Chains**: Filter transactions by chains.
     * - **Transaction Types**: Filter transactions by transaction types.
     * - **Tokens**: Filter transactions by tokens.
     * - **Minimum USD Value**: Filter transactions by minimum USD value.
     * - **Starting Point**: Specify the starting point of the feed.
     * - **New Trades**: Filter transactions by new trades.
     * ### Supported Chains
     * - All EVM chains
     * - Solana
     * ### Cost
     * - **Cost per request**: 5 credits
     * - **When filtered by wallet address**: 3 credits
     * ### Available Plans
     * Available on the following plans:
     * - Free
     * - Builder
     * - Architect
     * - Enterprise
     *
     *
     * @summary Feed
     * @throws FetchError<400, types.GetFeedResponse400> Bad Request - The request was unacceptable, often due to missing a required parameter.
     * @throws FetchError<403, types.GetFeedResponse403> Forbidden - The client does not have access rights to the content.
     * @throws FetchError<500, types.GetFeedResponse500> Internal Server Error - Something went wrong on the server's end.
     */
    getFeed(metadata?: types.GetFeedMetadataParam): Promise<FetchResponse<200, types.GetFeedResponse200>>;
    /**
     * This endpoint retrieves a PnL values for a specified wallet by different tokens.
     * ### Cost per Request
     * Cost per request = 5 credits.
     * ### Available Plans
     * Available on the following plans:
     * - Builder
     * - Architect
     * - Enterprise
     *
     *
     * @summary Token PNL
     * @throws FetchError<400, types.GetTokensPnlResponse400> Bad Request - The request was unacceptable, often due to missing a required parameter.
     * @throws FetchError<403, types.GetTokensPnlResponse403> Forbidden - The client does not have access rights to the content.
     * @throws FetchError<500, types.GetTokensPnlResponse500> Internal Server Error - Something went wrong on the server's end.
     */
    getTokensPNL(metadata: types.GetTokensPnlMetadataParam): Promise<FetchResponse<200, types.GetTokensPnlResponse200>>;
    /**
     * This endpoint retrieves the PnL value for an NFT collection on Ethereum.
     * ### Cost per Request
     * Cost per request = 5 credits.
     * ### Available Plans
     * Available on the following plans:
     * - Builder
     * - Architect
     * - Enterprise
     *
     *
     * @summary NFT PNL
     * @throws FetchError<400, types.GetNftsPnlResponse400> Bad Request - The request was unacceptable, often due to missing a required parameter.
     * @throws FetchError<403, types.GetNftsPnlResponse403> Forbidden - The client does not have access rights to the content.
     * @throws FetchError<500, types.GetNftsPnlResponse500> Internal Server Error - Something went wrong on the server's end.
     */
    getNftsPNL(metadata: types.GetNftsPnlMetadataParam): Promise<FetchResponse<200, types.GetNftsPnlResponse200>>;
    /**
     * This endpoint retrieves aggregated PnL stats for a specified wallet.
     * ### Cost per Request
     * Cost per request = 20 credits.
     * ### Available Plans
     * Available on the following plans:
     * - Builder
     * - Architect
     * - Enterprise
     *
     *
     * @summary Aggregated Token PNL
     * @throws FetchError<400, types.GetTotalStatsResponse400> Bad Request - The request was unacceptable, often due to missing a required parameter.
     * @throws FetchError<403, types.GetTotalStatsResponse403> Forbidden - The client does not have access rights to the content.
     * @throws FetchError<500, types.GetTotalStatsResponse500> Internal Server Error - Something went wrong on the server's end.
     */
    getTotalStats(metadata: types.GetTotalStatsMetadataParam): Promise<FetchResponse<200, types.GetTotalStatsResponse200>>;
    /**
     * # This endpoint is deprecated. Please use the `/api/v1/tags` endpoint instead.
     * This endpoint retrieves tags associated with a specific wallet address. Tags provide
     * insights into wallet activity, such as NFT trading volume or participation in DeFi
     * protocols.
     * ### Cost per Request
     * Cost per request = 5 credits.
     * ### Available Plans
     * Available on the following plans:
     * - Builder
     * - Architect
     * - Enterprise
     *
     *
     * @summary Tags
     * @throws FetchError<400, types.GetWalletTagsResponse400> Bad Request - The request was unacceptable, often due to missing a required parameter.
     * @throws FetchError<403, types.GetWalletTagsResponse403> Forbidden - The client does not have access rights to the content.
     * @throws FetchError<500, types.GetWalletTagsResponse500> Internal Server Error - Something went wrong on the server's end.
     */
    getWalletTags(metadata: types.GetWalletTagsMetadataParam): Promise<FetchResponse<200, types.GetWalletTagsResponse200>>;
    /**
     * This endpoint retrieves a list of wallets related to the specified wallet address.
     * Related wallets are determined based on shared activity, such as token transfers, NFT
     * trades, or participation in DeFi protocols.
     * ### Cost per Request
     * Cost per request = 10 credits.
     * ### Available Plans
     * Available on the following plans:
     * - Builder
     * - Architect
     * - Enterprise
     *
     *
     * @summary Related Wallets
     * @throws FetchError<400, types.GetRelatedWalletsResponse400> Bad Request - The request was unacceptable, often due to missing a required parameter.
     * @throws FetchError<403, types.GetRelatedWalletsResponse403> Forbidden - The client does not have access rights to the content.
     * @throws FetchError<500, types.GetRelatedWalletsResponse500> Internal Server Error - Something went wrong on the server's end.
     */
    getRelatedWallets(metadata: types.GetRelatedWalletsMetadataParam): Promise<FetchResponse<200, types.GetRelatedWalletsResponse200>>;
    /**
     * This endpoint retrieves tags associated with a specific wallet address.  Tags provide
     * insights into wallet activity.
     * Note, tags will only be returned for wallets indexed by the Cielo engine.
     * ### Cost per Request
     * Cost per request = 5 credits.
     * ### Available Plans
     * Available on the following plans:
     * - Builder
     * - Architect
     * - Enterprise
     *
     *
     * @summary Wallets Tags
     * @throws FetchError<400, types.GetWalletsTagsResponse400> Bad Request - The request was unacceptable, often due to missing a required parameter.
     * @throws FetchError<403, types.GetWalletsTagsResponse403> Forbidden - The client does not have access rights to the content.
     * @throws FetchError<500, types.GetWalletsTagsResponse500> Internal Server Error - Something went wrong on the server's end.
     */
    getWalletsTags(metadata: types.GetWalletsTagsMetadataParam): Promise<FetchResponse<200, types.GetWalletsTagsResponse200>>;
    /**
     * This endpoint retrieves wallets associated with a specific tag. Tags provide insights
     * into wallet activity.
     * ### Cost per Request
     * Cost per request = 10 credits.
     * ### Available Plans
     * Available on the following plans:
     * - Builder
     * - Architect
     * - Enterprise
     *
     *
     * @summary Wallets by Tag
     * @throws FetchError<400, types.GetWalletsByTagResponse400> Bad Request - The request was unacceptable, often due to missing a required parameter.
     * @throws FetchError<403, types.GetWalletsByTagResponse403> Forbidden - The client does not have access rights to the content.
     * @throws FetchError<500, types.GetWalletsByTagResponse500> Internal Server Error - Something went wrong on the server's end.
     */
    getWalletsByTag(metadata: types.GetWalletsByTagMetadataParam): Promise<FetchResponse<200, types.GetWalletsByTagResponse200>>;
    /**
     * This endpoint retrieves a list of wallets that are being tracked. Tracked wallets are
     * wallets that are being monitored for activity, such as token transfers, NFT trades, or
     * participation in DeFi protocols.
     * Plans Included = Free, Builder, Architect Cost per request = 5 credits.
     *
     *
     * @summary Get Tracked Wallets
     * @throws FetchError<400, types.GetTrackedWalletsResponse400> Bad Request - The request was unacceptable, often due to missing a required parameter.
     * @throws FetchError<403, types.GetTrackedWalletsResponse403> Forbidden - The client does not have access rights to the content.
     * @throws FetchError<500, types.GetTrackedWalletsResponse500> Internal Server Error - Something went wrong on the server's end.
     */
    getTrackedWallets(metadata?: types.GetTrackedWalletsMetadataParam): Promise<FetchResponse<200, types.GetTrackedWalletsResponse200>>;
    /**
     * This endpoint adds a wallet to the list of tracked wallets. Tracked wallets are wallets
     * that are being monitored for activity, such as token transfers, NFT trades, or
     * participation in DeFi protocols.
     * Plans Included = Free, Builder, Architect Cost per request = 5 credits.
     *
     *
     * @summary Add Tracked Wallet
     * @throws FetchError<400, types.AddTrackedWalletResponse400> Bad Request - The request was unacceptable, often due to missing a required parameter.
     * @throws FetchError<403, types.AddTrackedWalletResponse403> Forbidden - The client does not have access rights to the content.
     * @throws FetchError<500, types.AddTrackedWalletResponse500> Internal Server Error - Something went wrong on the server's end.
     */
    addTrackedWallet(body: types.AddTrackedWalletBodyParam): Promise<FetchResponse<200, types.AddTrackedWalletResponse200>>;
    /**
     * This endpoint removes a wallet from the list of tracked wallets. Tracked wallets are
     * wallets that are being monitored for activity, such as token transfers, NFT trades, or
     * participation in DeFi protocols.
     * Plans Included = Free, Builder, Architect Cost per request = 5 credits.
     *
     *
     * @summary Remove Tracked Wallets
     * @throws FetchError<400, types.RemoveTrackedWalletsResponse400> Bad Request - The request was unacceptable, often due to missing a required parameter.
     * @throws FetchError<403, types.RemoveTrackedWalletsResponse403> Forbidden - The client does not have access rights to the content.
     * @throws FetchError<500, types.RemoveTrackedWalletsResponse500> Internal Server Error - Something went wrong on the server's end.
     */
    removeTrackedWallets(body: types.RemoveTrackedWalletsBodyParam): Promise<FetchResponse<200, types.RemoveTrackedWalletsResponse200>>;
    /**
     * This endpoint updates a tracked wallet. Tracked wallets are wallets that are being
     * monitored for activity, such as token transfers, NFT trades, or participation in DeFi
     * protocols.
     * Plans Included = Free, Builder, Architect Cost per request = 5 credits.
     *
     *
     * @summary Update Tracked Wallet
     * @throws FetchError<400, types.UpdateTrackedWalletResponse400> Bad Request - The request was unacceptable, often due to missing a required parameter.
     * @throws FetchError<403, types.UpdateTrackedWalletResponse403> Forbidden - The client does not have access rights to the content.
     * @throws FetchError<500, types.UpdateTrackedWalletResponse500> Internal Server Error - Something went wrong on the server's end.
     */
    updateTrackedWallet(body: types.UpdateTrackedWalletBodyParam, metadata: types.UpdateTrackedWalletMetadataParam): Promise<FetchResponse<200, types.UpdateTrackedWalletResponse200>>;
    /**
     * This endpoint retrieves public wallets lists.
     * ### Cost per Request
     * Cost per request = 5 credits.
     * ### Available Plans
     * Available on the following plans:
     * - Builder
     * - Architect
     * - Enterprise
     *
     *
     * @summary Get all wallets lists
     * @throws FetchError<400, types.GetAllListsResponse400> Bad Request - The request was unacceptable, often due to missing a required parameter.
     * @throws FetchError<403, types.GetAllListsResponse403> Forbidden - The client does not have access rights to the content.
     * @throws FetchError<500, types.GetAllListsResponse500> Internal Server Error - Something went wrong on the server's end.
     */
    getAllLists(metadata?: types.GetAllListsMetadataParam): Promise<FetchResponse<200, types.GetAllListsResponse200>>;
    /**
     * This endpoint retrieves user's wallets lists.
     * ### Cost per Request
     * Cost per request = 5 credits.
     * ### Available Plans
     * Available on the following plans:
     * - Builder
     * - Architect
     * - Enterprise
     *
     *
     * @summary Get all lists for a user
     * @throws FetchError<400, types.GetUserListsResponse400> Bad Request - The request was unacceptable, often due to missing a required parameter.
     * @throws FetchError<403, types.GetUserListsResponse403> Forbidden - The client does not have access rights to the content.
     * @throws FetchError<500, types.GetUserListsResponse500> Internal Server Error - Something went wrong on the server's end.
     */
    getUserLists(): Promise<FetchResponse<200, types.GetUserListsResponse200>>;
    /**
     * This endpoint creates a new list for a user.
     * ### Cost per Request
     * Cost per request = 5 credits.
     * ### Available Plans
     * Available on the following plans:
     * - Builder
     * - Architect
     * - Enterprise
     *
     *
     * @summary Add a list
     * @throws FetchError<400, types.AddUserListResponse400> Bad Request - The request was unacceptable, often due to missing a required parameter.
     * @throws FetchError<403, types.AddUserListResponse403> Forbidden - The client does not have access rights to the content.
     * @throws FetchError<500, types.AddUserListResponse500> Internal Server Error - Something went wrong on the server's end.
     */
    addUserList(body: types.AddUserListBodyParam): Promise<FetchResponse<200, types.AddUserListResponse200>>;
    /**
     * This endpoint updates a user's list.
     * ### Cost per Request
     * Cost per request = 5 credits.
     * ### Available Plans
     * Available on the following plans:
     * - Builder
     * - Architect
     * - Enterprise
     *
     *
     * @summary Update a list
     * @throws FetchError<400, types.UpdateUserListResponse400> Bad Request - The request was unacceptable, often due to missing a required parameter.
     * @throws FetchError<403, types.UpdateUserListResponse403> Forbidden - The client does not have access rights to the content.
     * @throws FetchError<500, types.UpdateUserListResponse500> Internal Server Error - Something went wrong on the server's end.
     */
    updateUserList(body: types.UpdateUserListBodyParam, metadata: types.UpdateUserListMetadataParam): Promise<FetchResponse<200, types.UpdateUserListResponse200>>;
    /**
     * This endpoint deletes a user's list.
     * ### Cost per Request
     * Cost per request = 5 credits.
     * ### Available Plans
     * Available on the following plans:
     * - Builder
     * - Architect
     * - Enterprise
     *
     *
     * @summary Delete a list
     * @throws FetchError<400, types.DeleteUserListResponse400> Bad Request - The request was unacceptable, often due to missing a required parameter.
     * @throws FetchError<403, types.DeleteUserListResponse403> Forbidden - The client does not have access rights to the content.
     * @throws FetchError<500, types.DeleteUserListResponse500> Internal Server Error - Something went wrong on the server's end.
     */
    deleteUserList(metadata: types.DeleteUserListMetadataParam): Promise<FetchResponse<200, types.DeleteUserListResponse200>>;
    /**
     * This endpoint toggles follow a list for a user.
     * ### Cost per Request
     * Cost per request = 5 credits.
     * ### Available Plans
     * Available on the following plans:
     * - Builder
     * - Architect
     * - Enterprise
     *
     *
     * @summary Toggle follow a list
     * @throws FetchError<400, types.ToggleFollowListResponse400> Bad Request - The request was unacceptable, often due to missing a required parameter.
     * @throws FetchError<403, types.ToggleFollowListResponse403> Forbidden - The client does not have access rights to the content.
     * @throws FetchError<500, types.ToggleFollowListResponse500> Internal Server Error - Something went wrong on the server's end.
     */
    toggleFollowList(metadata: types.ToggleFollowListMetadataParam): Promise<FetchResponse<200, types.ToggleFollowListResponse200>>;
    /**
     * This endpoint sets up a WebSocket connection to receive updates on new transactions.
     *
     * Once connected, the client can send command messages to the WebSocket in the following
     * formats:
     * ### Subscribe to a feed:
     * Refer to the `FeedSubscribeCommand` schema for the command structure.
     * #### Subscribe to all feed events:
     * ```json
     * {
     *   "type": "subscribe_feed",
     * }
     * ```
     * #### Subscribe to feed with filters. Filters tx_types, chains, tokens, min_usd_value,
     * new_trade are optional:
     * ```json
     * {
     *   "type": "subscribe_feed",
     *   "filter": {
     *       "tx_types": ["transfer", "swap"],
     *       "chains": ["eth", "bsc"],
     *       "tokens": ["0x1234", "0x5678"],
     *       "min_usd_value": 1000,
     *       "new_trade": true
     *   }
     * }
     * ```
     * #### Subscribe to feed for an new trades:
     * ```json
     * {
     *   "type": "subscribe_feed",
     *   "filter": {
     *       "new_trade": true
     *   }
     * }
     * ```
     * ### Subscribe to feed for a certain list:
     * ```json
     * {
     *   "type": "subscribe_feed",
     *   "list_id": "list-id"
     * }
     * ```
     * ### Unsubscribe from a feed:
     * Refer to the `FeedUnsubscribeCommand` schema for the command structure.
     * ```json
     * {
     *   "type": "unsubscribe_feed"
     * }
     * ```
     * ### Subscribe to a wallet:
     * Refer to the `WalletSubscribeCommand` schema for the command structure.
     * #### Subscribe to all wallet events:
     * ```json
     * {
     *       "type": "subscribe_wallet",
     *       "wallet": "wallet-address",
     * }
     * ```
     * #### Subscribe to wallet events with filters. Filters tx_types, chains, tokens,
     * min_usd_value, new_trade are optional:
     * ```json
     * {
     *   "type": "subscribe_wallet",
     *   "wallet": "wallet-address",
     *   "filter": {
     *       "tx_types": ["transfer", "swap"],
     *       "chains": ["ethereum", "bsc"],
     *       "tokens": ["0x1234", "0x5678"],
     *       "min_usd_value": 1000,
     *       "new_trade": true
     *   }
     * }
     * ```
     * ### Unsubscribe from a wallet:
     * Refer to the `WalletUnsubscribeCommand` schema for the command structure.
     * ```json
     * {
     *   "type": "unsubscribe_wallet",
     *   "wallet": "wallet-address"
     * }
     * ```
     * The server will send back messages in the following schema:
     * ### Websocket Event Message:
     * Refer to the `WebsocketEvent` schema for the message structure.
     * ```json
     * {
     *   "type": "event_type",
     *   "data": {}
     * }
     * ```
     * ### Pricing Information
     * Every 10 messages sent over the WebSocket connection consume 1 credit.
     * ### Available Plans
     * Available on the following plans:
     * - Builder
     * - Architect
     * - Enterprise
     *
     *
     * @summary WebSocket Connection
     * @throws FetchError<403, types.GetWebSocketResponse403> Forbidden - The client does not have access rights to the content.
     * @throws FetchError<500, types.GetWebSocketResponse500> Internal Server Error - Something went wrong on the server's end.
     */
    getWebSocket(): Promise<FetchResponse<101, types.GetWebSocketResponse101>>;
}
declare const createSDK: SDK;
export = createSDK;
