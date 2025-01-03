/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/api/v1/nav/tracking": {
    /** Post Track Data */
    post: operations["post_track_data_api_v1_nav_tracking_post"];
  };
  "/api/v1/nav/tracking/start": {
    /** Post Start Track Data */
    post: operations["post_start_track_data_api_v1_nav_tracking_start_post"];
  };
  "/api/v1/nav/tracking/{session_id}": {
    /** Get Tracking Data */
    get: operations["get_tracking_data_api_v1_nav_tracking__session_id__get"];
  };
  "/api/v1/nav/geo/countries": {
    /** Get Countries */
    get: operations["get_countries_api_v1_nav_geo_countries_get"];
  };
  "/api/v1/nav/geo/cities": {
    /** Get Cities */
    get: operations["get_cities_api_v1_nav_geo_cities_get"];
  };
  "/api/v1/nav/geosearch": {
    /**
     * Geolocation
     * @description Try to found locations by address name
     * Result return in https://www.rfc-editor.org/rfc/rfc7946 format
     */
    get: operations["geolocation_api_v1_nav_geosearch_get"];
  };
  "/api/v1/nav/geocode/autocomplete": {
    /**
     * Geocoding Autocomplete
     * @description Try to found address name by coords
     *
     * Result return in https://www.rfc-editor.org/rfc/rfc7946 format
     */
    get: operations["geocoding_autocomplete_api_v1_nav_geocode_autocomplete_get"];
  };
  "/api/v1/nav/geocode/place": {
    /**
     * Geocoding Place
     * @description Try to found address name by coords
     *
     * Result return in https://www.rfc-editor.org/rfc/rfc7946 format
     */
    get: operations["geocoding_place_api_v1_nav_geocode_place_get"];
  };
  "/api/v1/nav/location": {
    /**
     * Get Default Address
     * @description Get default user addresses
     */
    get: operations["get_default_address_api_v1_nav_location_get"];
    /**
     * Create
     * @description Create new user address
     */
    post: operations["create_api_v1_nav_location_post"];
  };
  "/api/v1/nav/locations": {
    /**
     * List Addresses
     * @description List of all available addresses within the service coach's set of clients, and within a given radius
     * OR
     * List all available addresses for a given user id
     */
    get: operations["list_addresses_api_v1_nav_locations_get"];
  };
  "/api/v1/nav/location/{location_id}": {
    /**
     * Update Location
     * @description Update user address by id
     */
    put: operations["update_location_api_v1_nav_location__location_id__put"];
    /**
     * Delete Location
     * @description Delete user address by id
     */
    delete: operations["delete_location_api_v1_nav_location__location_id__delete"];
  };
  "/api/v1/nav/zones": {
    /**
     * Get Zones
     * @description Get all available location zone (under dev)
     */
    get: operations["get_zones_api_v1_nav_zones_get"];
  };
  "/api/v1/nav/zone": {
    /**
     * Zone Create
     * @description Create new location zone for coach (under dev)
     */
    post: operations["zone_create_api_v1_nav_zone_post"];
  };
  "/api/v1/nav/zone/{zone_id}": {
    /**
     * Zone Update
     * @description Update coach location zone (under dev)
     */
    put: operations["zone_update_api_v1_nav_zone__zone_id__put"];
    /**
     * Zone Delete
     * @description Delete coach location zone (under dev)
     */
    delete: operations["zone_delete_api_v1_nav_zone__zone_id__delete"];
  };
  "/api/v1/nav/coverage": {
    /**
     * Coverage
     * @description Try get coverage by location and radius
     *
     * Result return in https://www.rfc-editor.org/rfc/rfc7946 format
     */
    get: operations["coverage_api_v1_nav_coverage_get"];
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
    /** AddressOut */
    AddressOut: {
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
      /**
       * Id
       * Format: uuid
       */
      id: string;
      /**
       * Activesessions
       * @default 0
       */
      activeSessions?: number;
    };
    /** AddressUpdateIn */
    AddressUpdateIn: {
      /**
       * Lng
       * @example 55.296249
       */
      lng?: number | null;
      /**
       * Lat
       * @example 25.276
       */
      lat?: number | null;
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
    };
    /** CoverageOut */
    CoverageOut: {
      /**
       * Clients
       * @default 0
       */
      clients?: number;
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
    /** GeoCityOut */
    GeoCityOut: {
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
      /** Name */
      name: string;
      /** Countrycode */
      countryCode: string;
      /** Countryname */
      countryName: string;
      /** Statename */
      stateName?: string | null;
    };
    /** GeoCountryOut */
    GeoCountryOut: {
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
      /** Name */
      name: string;
      /** Native */
      native: string | null;
      /** Countrycode */
      countryCode: string;
      /** Currency */
      currency: string;
    };
    /** GeocodingPlaceAutocompleteOut */
    GeocodingPlaceAutocompleteOut: {
      /**
       * Title
       * @description Format address
       */
      title: string;
      /**
       * Description
       * @description Format address
       */
      description: string;
      /** Placeid */
      placeId: string;
      /**
       * Distance
       * @description Distance in meters
       */
      distance?: number | null;
    };
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
    /** StretchResponse */
    StretchResponse: {
      /**
       * Status
       * @description Stretch status response
       * @default success
       */
      status?: string;
    };
    /** TrackingIn */
    TrackingIn: {
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
      /** Altitude */
      altitude?: number | null;
      /** Direction */
      direction?: number | null;
      /** Speed */
      speed?: number | null;
      /** Timestamp */
      timestamp?: string | null;
      /** Sessionid */
      sessionId?: string | null;
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
    /** ZoneIn */
    ZoneIn: {
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
    };
    /** ZoneOut */
    ZoneOut: {
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

  /** Post Track Data */
  post_track_data_api_v1_nav_tracking_post: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["TrackingIn"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["TrackingIn"];
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
  /** Post Start Track Data */
  post_start_track_data_api_v1_nav_tracking_start_post: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["TrackingIn"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["TrackingIn"];
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
  /** Get Tracking Data */
  get_tracking_data_api_v1_nav_tracking__session_id__get: {
    parameters: {
      path: {
        session_id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": unknown;
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
  /** Get Countries */
  get_countries_api_v1_nav_geo_countries_get: {
    parameters: {
      query?: {
        /**
         * @description longitude,latitude
         * @example 55,25
         */
        proximity?: string | null;
        /** @description longitude,latitude */
        text?: string | null;
        limit?: number;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["GeoCountryOut"][];
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
  /** Get Cities */
  get_cities_api_v1_nav_geo_cities_get: {
    parameters: {
      query?: {
        /**
         * @description longitude,latitude
         * @example 55,25
         */
        proximity?: string | null;
        /**
         * @description country iso2 code
         * @example ae
         */
        countryCode?: string | null;
        text?: string | null;
        limit?: number;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["GeoCityOut"][];
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
  /**
   * Geolocation
   * @description Try to found locations by address name
   * Result return in https://www.rfc-editor.org/rfc/rfc7946 format
   */
  geolocation_api_v1_nav_geosearch_get: {
    parameters: {
      query: {
        /**
         * @description coords: lng,lat or address name
         * @example JLT Cluster H
         */
        query: string;
        proximity?: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": unknown;
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
  /**
   * Geocoding Autocomplete
   * @description Try to found address name by coords
   *
   * Result return in https://www.rfc-editor.org/rfc/rfc7946 format
   */
  geocoding_autocomplete_api_v1_nav_geocode_autocomplete_get: {
    parameters: {
      query: {
        /**
         * @description coords: lng,lat or address name
         * @example JLT Cluster H
         */
        query: string;
        proximity?: string | null;
        limit?: number | null;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["GeocodingPlaceAutocompleteOut"][];
        };
      };
      /** @description Bad Request */
      400: {
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
  /**
   * Geocoding Place
   * @description Try to found address name by coords
   *
   * Result return in https://www.rfc-editor.org/rfc/rfc7946 format
   */
  geocoding_place_api_v1_nav_geocode_place_get: {
    parameters: {
      query: {
        /** @description place id from autocomplete response */
        place_id: string;
        /** @example 54.65395619853033,25.3050275806406 */
        coords?: string | null;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["AddressBaseOut"];
        };
      };
      /** @description Bad Request */
      400: {
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
  /**
   * Get Default Address
   * @description Get default user addresses
   */
  get_default_address_api_v1_nav_location_get: {
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["AddressOut"];
        };
      };
    };
  };
  /**
   * Create
   * @description Create new user address
   */
  create_api_v1_nav_location_post: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["AddressIn"];
      };
    };
    responses: {
      /** @description Successful Response */
      201: {
        content: {
          "application/json": components["schemas"]["AddressOut"];
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
  /**
   * List Addresses
   * @description List of all available addresses within the service coach's set of clients, and within a given radius
   * OR
   * List all available addresses for a given user id
   */
  list_addresses_api_v1_nav_locations_get: {
    parameters: {
      query?: {
        service_id?: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["AddressOut"][];
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
  /**
   * Update Location
   * @description Update user address by id
   */
  update_location_api_v1_nav_location__location_id__put: {
    parameters: {
      path: {
        location_id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["AddressUpdateIn"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["AddressOut"];
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
  /**
   * Delete Location
   * @description Delete user address by id
   */
  delete_location_api_v1_nav_location__location_id__delete: {
    parameters: {
      path: {
        location_id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["StretchResponse"];
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
  /**
   * Get Zones
   * @description Get all available location zone (under dev)
   */
  get_zones_api_v1_nav_zones_get: {
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["ZoneOut"][];
        };
      };
    };
  };
  /**
   * Zone Create
   * @description Create new location zone for coach (under dev)
   */
  zone_create_api_v1_nav_zone_post: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["ZoneIn"];
      };
    };
    responses: {
      /** @description Successful Response */
      201: {
        content: {
          "application/json": unknown;
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
  /**
   * Zone Update
   * @description Update coach location zone (under dev)
   */
  zone_update_api_v1_nav_zone__zone_id__put: {
    parameters: {
      path: {
        zone_id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["ZoneIn"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["ZoneOut"];
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
  /**
   * Zone Delete
   * @description Delete coach location zone (under dev)
   */
  zone_delete_api_v1_nav_zone__zone_id__delete: {
    parameters: {
      path: {
        zone_id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": unknown;
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
  /**
   * Coverage
   * @description Try get coverage by location and radius
   *
   * Result return in https://www.rfc-editor.org/rfc/rfc7946 format
   */
  coverage_api_v1_nav_coverage_get: {
    parameters: {
      query: {
        lng: number;
        lat: number;
        radius: number;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["CoverageOut"];
        };
      };
      /** @description Bad Request */
      400: {
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
}
