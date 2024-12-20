/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/api/v1/chat/channels": {
    /** Get Channels */
    get: operations["get_channels_api_v1_chat_channels_get"];
  };
  "/api/v1/chat/channels/info": {
    /** Get Channel Unread */
    get: operations["get_channel_unread_api_v1_chat_channels_info_get"];
  };
  "/api/v1/chat/channel/{channel_id}/upload": {
    /** Upload Image */
    post: operations["upload_image_api_v1_chat_channel__channel_id__upload_post"];
  };
  "/api/v1/chat/drop": {
    /** Get Direct Websocket */
    get: operations["get_direct_websocket_api_v1_chat_drop_get"];
  };
  "/api/v1/chat/sb/messages": {
    /** Get Messages */
    get: operations["get_messages_api_v1_chat_sb_messages_get"];
  };
  "/api/v1/chat/sb/message": {
    /** Send Message */
    post: operations["send_message_api_v1_chat_sb_message_post"];
  };
  "/api/v1/chat/sb/message/{message_id}/report": {
    /** Report Message */
    post: operations["report_message_api_v1_chat_sb_message__message_id__report_post"];
  };
  "/api/v1/chat/sb/message/{message_id}": {
    /** Delete Message */
    delete: operations["delete_message_api_v1_chat_sb_message__message_id__delete"];
  };
  "/api/v1/chat/sb/channels": {
    /** Get Channels */
    get: operations["get_channels_api_v1_chat_sb_channels_get"];
  };
  "/api/v1/chat/sb/channel/{user_id}": {
    /** Get Or Create Channel */
    post: operations["get_or_create_channel_api_v1_chat_sb_channel__user_id__post"];
    /** Delete User Channel */
    delete: operations["delete_user_channel_api_v1_chat_sb_channel__user_id__delete"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /**
     * Accommodations
     * @enum {string}
     */
    Accommodations: "apartment" | "hotel" | "flat" | "house" | "any" | "office" | "other" | "undefined";
    /** AddressBaseOut */
    AddressBaseOut: {
      /**
       * Lng
       * @example 55.296249
       */
      lng: number;
      /**
       * Lat
       * @example 25.276
       */
      lat: number;
      /**
       * Zoom
       * @default 17
       * @example 14
       */
      zoom?: number | null;
      /** @description accommodation */
      accommodation?: components["schemas"]["Accommodations"] | null;
      /** @description User allergy */
      allergy?: components["schemas"]["UserAllergy"] | null;
      /**
       * Address
       * @description Address
       * @example 548, floor 5, Cluster G, Tower Al mas, JLT, Dubai, UAE
       */
      address?: string | null;
      /**
       * Country
       * @description Country
       * @example United Arab Emirates
       */
      country?: string | null;
      /**
       * State
       * @description state
       * @example Dubai
       */
      state?: string | null;
      /**
       * City
       * @description city
       * @example Dubai
       */
      city?: string | null;
      /**
       * Line1
       * @description line1
       * @example Jumeirah Lake Towers
       */
      line1?: string | null;
      /**
       * Line2
       * @description line2
       * @example 1068, Tower Meadows 2
       */
      line2?: string | null;
      /**
       * Zip
       * @description zip (po box)
       */
      zip?: string | null;
      /**
       * Building
       * @description building
       * @example Tower Meadows 2
       */
      building?: string | null;
      /**
       * Entrance
       * @description entrance
       * @example main
       */
      entrance?: string | null;
      /**
       * Floor
       * @description floor
       * @example 12
       */
      floor?: string | null;
      /**
       * Apartment
       * @description apartment
       * @example 1245
       */
      apartment?: string | null;
      /**
       * Neighborhood
       * @description neighborhood
       */
      neighborhood?: string | null;
      /**
       * Radius
       * @description Radius in meters
       * @example 10000
       */
      radius?: number | null;
      /**
       * @description Location label
       * @default home
       * @example home
       */
      label?: components["schemas"]["LocationLabel"];
      /**
       * Labelother
       * @description Location label
       */
      labelOther?: string | null;
      /**
       * Details
       * @description notes for address
       */
      details?: string | null;
      parking?: components["schemas"]["ParkingType"] | null;
      /** Parkingdescription */
      parkingDescription?: string | null;
      /** Instructions */
      instructions?: string | null;
      /** Isdefault */
      isDefault?: boolean | null;
      /**
       * Name
       * @description name
       * @example Name of address
       */
      name?: string | null;
      /** Id */
      id?: string | null;
    };
    /** AddressIn */
    AddressIn: {
      /**
       * Lng
       * @example 55.296249
       */
      lng: number;
      /**
       * Lat
       * @example 25.276
       */
      lat: number;
      /**
       * Zoom
       * @default 17
       * @example 14
       */
      zoom?: number | null;
      /** @description accommodation */
      accommodation?: components["schemas"]["Accommodations"] | null;
      /** @description User allergy */
      allergy?: components["schemas"]["UserAllergy"] | null;
      /**
       * Address
       * @description Address
       * @example 548, floor 5, Cluster G, Tower Al mas, JLT, Dubai, UAE
       */
      address?: string | null;
      /**
       * Country
       * @description Country
       * @example United Arab Emirates
       */
      country?: string | null;
      /**
       * State
       * @description state
       * @example Dubai
       */
      state?: string | null;
      /**
       * City
       * @description city
       * @example Dubai
       */
      city?: string | null;
      /**
       * Line1
       * @description line1
       * @example Jumeirah Lake Towers
       */
      line1?: string | null;
      /**
       * Line2
       * @description line2
       * @example 1068, Tower Meadows 2
       */
      line2?: string | null;
      /**
       * Zip
       * @description zip (po box)
       */
      zip?: string | null;
      /**
       * Building
       * @description building
       * @example Tower Meadows 2
       */
      building?: string | null;
      /**
       * Entrance
       * @description entrance
       * @example main
       */
      entrance?: string | null;
      /**
       * Floor
       * @description floor
       * @example 12
       */
      floor?: string | null;
      /**
       * Apartment
       * @description apartment
       * @example 1245
       */
      apartment?: string | null;
      /**
       * Neighborhood
       * @description neighborhood
       */
      neighborhood?: string | null;
      /**
       * Radius
       * @description Radius in meters
       * @example 10000
       */
      radius?: number | null;
      /**
       * @description Location label
       * @default home
       * @example home
       */
      label?: components["schemas"]["LocationLabel"];
      /**
       * Labelother
       * @description Location label
       */
      labelOther?: string | null;
      /**
       * Details
       * @description notes for address
       */
      details?: string | null;
      parking?: components["schemas"]["ParkingType"] | null;
      /** Parkingdescription */
      parkingDescription?: string | null;
      /** Instructions */
      instructions?: string | null;
      /**
       * Isdefault
       * @default false
       */
      isDefault?: boolean | null;
      /**
       * Name
       * @description name
       * @example Name of address
       */
      name?: string | null;
    };
    /** FileBase */
    AttachmentFileOut: {
      /**
       * Id
       * @description UUID of file
       */
      id?: string | null;
      /**
       * Title
       * @description The title name of the uploaded file
       */
      title?: string | null;
      /**
       * Description
       * @description The description for uploaded file
       */
      description?: string | null;
      /**
       * Source
       * @default local
       */
      source?: string;
      /**
       * Originfilename
       * @description The original file name given when uploading the file
       */
      originFilename?: string | null;
      /** Filesize */
      filesize?: number | null;
      /**
       * Contenttype
       * @description File contents in MIME format
       */
      contentType?: string | null;
      /**
       * Url
       * @description Direct link to the downloaded file. The file can be recompressed when it is placed in the storage
       */
      url?: string | null;
      /**
       * Thumb
       * @description Link to the preview file
       */
      thumb?: string | null;
      /** @description File visibility status in the system: on review, approved or rejected */
      status?: components["schemas"]["FileStatus"] | null;
      /**
       * Duration
       * @description Duration in seconds
       */
      duration?: number | null;
      /**
       * Videothumb
       * @description Link to the preview file
       */
      videoThumb?: string | null;
    };
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
      channelType?: string | null;
      /** @default [] */
      user?: components["schemas"]["ChannelMember"] | null;
      /**
       * Lastmessage
       * @default
       */
      lastMessage?: string | null;
      /**
       * Unread
       * @default 0
       */
      unread?: number | null;
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
    /**
     * FileStatus
     * @enum {string}
     */
    FileStatus: "uploaded" | "processing" | "approved" | "rejected" | "review" | "draft" | "deleted";
    /** HTTPValidationError */
    HTTPValidationError: {
      /** Detail */
      detail?: components["schemas"]["ValidationError"][];
    };
    /**
     * LocationLabel
     * @enum {string}
     */
    LocationLabel: "home" | "work" | "other";
    /**
     * ParkingType
     * @enum {string}
     */
    ParkingType: "free" | "paid" | "other";
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
      freeze?: boolean;
    };
    /** SBMessageIn */
    SBMessageIn: {
      /** Channelurl */
      channelUrl: string;
      /** Message */
      message: string;
      /** @default message */
      messageType?: components["schemas"]["SBMessageType"];
      location?: components["schemas"]["AddressIn"] | null;
      /**
       * Attachmentids
       * @default []
       */
      attachmentIds?: string[];
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
      /**
       * Customtype
       * @default text
       */
      customType?: string;
      /**
       * Attachments
       * @default []
       */
      attachments?: components["schemas"]["AttachmentFileOut"][];
      location?: components["schemas"]["AddressBaseOut"] | null;
      /** Poll */
      poll?: Record<string, never> | null;
      user?: components["schemas"]["SBMessageUserOut"] | null;
      /**
       * Isreported
       * @default false
       */
      isReported?: boolean;
    };
    /**
     * SBMessageType
     * @enum {string}
     */
    SBMessageType: "admin" | "message" | "file" | "location";
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
    /** SBReportMessageIn */
    SBReportMessageIn: {
      /** Chaturl */
      chatUrl: string;
      /** Reason */
      reason: string;
      /** Description */
      description?: string | null;
      /**
       * Attachmentids
       * @default []
       */
      attachmentIds?: string[];
    };
    /** StretchResponse */
    StretchResponse: {
      /**
       * Status
       * @description Stretch status response
       * @default success
       */
      status?: string;
    };
    /**
     * UserAllergy
     * @enum {string}
     */
    UserAllergy: "none" | "cat" | "dog" | "unknown" | "all";
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

export type external = Record<string, never>;

export interface operations {

  /** Get Channels */
  get_channels_api_v1_chat_channels_get: {
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["ChannelDirect"][];
        };
      };
    };
  };
  /** Get Channel Unread */
  get_channel_unread_api_v1_chat_channels_info_get: {
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": unknown;
        };
      };
    };
  };
  /** Upload Image */
  upload_image_api_v1_chat_channel__channel_id__upload_post: {
    parameters: {
      path: {
        channel_id: string;
      };
    };
    requestBody: {
      content: {
        "multipart/form-data": components["schemas"]["Body_upload_image_api_v1_chat_channel__channel_id__upload_post"];
      };
    };
    responses: {
      /** @description Successful Response */
      201: {
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request */
      404: {
        content: {
          "application/json": components["schemas"]["ErrorResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** Get Direct Websocket */
  get_direct_websocket_api_v1_chat_drop_get: {
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": unknown;
        };
      };
    };
  };
  /** Get Messages */
  get_messages_api_v1_chat_sb_messages_get: {
    parameters: {
      query: {
        channel_url: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["SBMessageOut"][];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** Send Message */
  send_message_api_v1_chat_sb_message_post: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["SBMessageIn"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["SBMessageOut"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** Report Message */
  report_message_api_v1_chat_sb_message__message_id__report_post: {
    parameters: {
      path: {
        message_id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["SBReportMessageIn"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["StretchResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** Delete Message */
  delete_message_api_v1_chat_sb_message__message_id__delete: {
    parameters: {
      query: {
        channel_url: string;
      };
      path: {
        message_id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["StretchResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** Get Channels */
  get_channels_api_v1_chat_sb_channels_get: {
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["SBDirectChannelOut"][];
        };
      };
    };
  };
  /** Get Or Create Channel */
  get_or_create_channel_api_v1_chat_sb_channel__user_id__post: {
    parameters: {
      path: {
        user_id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["SBDirectChannelOut"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** Delete User Channel */
  delete_user_channel_api_v1_chat_sb_channel__user_id__delete: {
    parameters: {
      path: {
        user_id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["StretchResponse"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
}
