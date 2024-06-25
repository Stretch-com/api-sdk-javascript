/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/api/v1/chat/channels": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Channels */
        get: operations["get_channels_api_v1_chat_channels_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chat/channels/info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Channel Unread */
        get: operations["get_channel_unread_api_v1_chat_channels_info_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chat/channel/{channel_id}/upload": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Upload Image */
        post: operations["upload_image_api_v1_chat_channel__channel_id__upload_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chat/drop": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Direct Websocket */
        get: operations["get_direct_websocket_api_v1_chat_drop_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chat/sb/messages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Messages */
        get: operations["get_messages_api_v1_chat_sb_messages_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chat/sb/message": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Send Message */
        post: operations["send_message_api_v1_chat_sb_message_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chat/sb/message/{message_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Message */
        delete: operations["delete_message_api_v1_chat_sb_message__message_id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chat/sb/channels": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Channels */
        get: operations["get_channels_api_v1_chat_sb_channels_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chat/sb/channel/{user_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Get Or Create Channel */
        post: operations["get_or_create_channel_api_v1_chat_sb_channel__user_id__post"];
        /** Delete User Channel */
        delete: operations["delete_user_channel_api_v1_chat_sb_channel__user_id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Body_upload_image_api_v1_chat_channel__channel_id__upload_post */
        Body_upload_image_api_v1_chat_channel__channel_id__upload_post: {
            /**
             * File
             * Format: binary
             */
            file: File;
        };
        /** ChannelDirect */
        ChannelDirect: {
            /** Channelid */
            channelId?: string | null;
            /**
             * Channeltype
             * @default direct
             */
            channelType: string | null;
            /** @default [] */
            user: components["schemas"]["ChannelMember"] | null;
            /**
             * Lastmessage
             * @default
             */
            lastMessage: string | null;
            /**
             * Unread
             * @default 0
             */
            unread: number | null;
        };
        /** ChannelMember */
        ChannelMember: {
            /** Userid */
            userId?: string | null;
            /** Fullname */
            fullName?: string | null;
            /** Lastonline */
            lastOnline?: string | null;
            /**
             * Avatarurl
             * @description URL for avatar profile picture
             */
            avatarUrl?: string | null;
        };
        /** ErrorResponse */
        ErrorResponse: {
            /** Error */
            error: string;
            /** Message */
            message: string;
            /** Code */
            code: number;
        };
        /** HTTPValidationError */
        HTTPValidationError: {
            /** Detail */
            detail?: components["schemas"]["ValidationError"][];
        };
        /** SBDirectChannelOut */
        SBDirectChannelOut: {
            /** Chaturl */
            chatUrl: string;
            /** Unreadmessagecount */
            unreadMessageCount: number;
            /**
             * Modifiedat
             * Format: date-time
             */
            modifiedAt: string;
            user?: components["schemas"]["SBMessageUserOut"] | null;
            /** Messagetype */
            messageType?: string | null;
            /** Lastmessage */
            lastMessage?: string | null;
            /**
             * Freeze
             * @default false
             */
            freeze: boolean;
        };
        /** SBMessageIn */
        SBMessageIn: {
            /** Channelurl */
            channelUrl: string;
            /** Message */
            message: string;
            /** @default message */
            messageType: components["schemas"]["SBMessageType"] | null;
        };
        /** SBMessageOut */
        SBMessageOut: {
            /** Messageid */
            messageId: number;
            type: components["schemas"]["SBMessageType"];
            /** Message */
            message: string;
            /**
             * Createdat
             * Format: date-time
             */
            createdAt: string;
            /** File */
            file?: Record<string, never> | null;
            /** Poll */
            poll?: Record<string, never> | null;
            user?: components["schemas"]["SBMessageUserOut"] | null;
        };
        /**
         * SBMessageType
         * @enum {string}
         */
        SBMessageType: "admin" | "message" | "file";
        /** SBMessageUserOut */
        SBMessageUserOut: {
            /** Id */
            id?: string | null;
            /** Displayname */
            displayName?: string | null;
            /** Initials */
            initials?: string | null;
            /** Avatarurl */
            avatarUrl?: string | null;
        };
        /** ValidationError */
        ValidationError: {
            /** Location */
            loc: (string | number)[];
            /** Message */
            msg: string;
            /** Error Type */
            type: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    get_channels_api_v1_chat_channels_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChannelDirect"][];
                };
            };
        };
    };
    get_channel_unread_api_v1_chat_channels_info_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    upload_image_api_v1_chat_channel__channel_id__upload_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                channel_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["Body_upload_image_api_v1_chat_channel__channel_id__upload_post"];
            };
        };
        responses: {
            /** @description Successful Response */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Bad Request */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_direct_websocket_api_v1_chat_drop_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    get_messages_api_v1_chat_sb_messages_get: {
        parameters: {
            query: {
                channel_url: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SBMessageOut"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    send_message_api_v1_chat_sb_message_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SBMessageIn"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SBMessageOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_message_api_v1_chat_sb_message__message_id__delete: {
        parameters: {
            query: {
                channel_url: string;
            };
            header?: never;
            path: {
                message_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_channels_api_v1_chat_sb_channels_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SBDirectChannelOut"][];
                };
            };
        };
    };
    get_or_create_channel_api_v1_chat_sb_channel__user_id__post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                user_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SBDirectChannelOut"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_user_channel_api_v1_chat_sb_channel__user_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                user_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
}
