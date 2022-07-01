const BUS_ROUTES = [
  {
    routeId: "0590",
    line: "59",
    "text-ca": "imminent",
    "t-in-s": 5,
    destination: "Pl. Reina Maria Cristina",
    "t-in-min": 0,
  },
  {
    routeId: "0670",
    line: "67",
    "text-ca": "1 min",
    "t-in-s": 96,
    destination: "Cornellà",
    "t-in-min": 1,
  },
  {
    routeId: "2132",
    line: "V13",
    "text-ca": "2 min",
    "t-in-s": 135,
    destination: "Pl. Kennedy",
    "t-in-min": 2,
  },
  {
    routeId: "2161",
    line: "H16",
    "text-ca": "5 min",
    "t-in-s": 312,
    destination: "Pg. Zona Franca",
    "t-in-min": 5,
  },
  {
    routeId: "2130",
    line: "V13",
    "text-ca": "6 min",
    "t-in-s": 374,
    destination: "Av. Tibidabo",
    "t-in-min": 6,
  },
  {
    routeId: "2501",
    line: "D50",
    "text-ca": "10 min",
    "t-in-s": 609,
    destination: "Paral·lel",
    "t-in-min": 10,
  },
  {
    routeId: "0550",
    line: "55",
    "text-ca": "11 min",
    "t-in-s": 666,
    destination: "Parc de Montjuïc",
    "t-in-min": 11,
  },
];

const BUS_ROUTES2 = [
  {
    routeId: "0590",
    line: "59",
    "text-ca": "3 min",
    "t-in-s": 5,
    destination: "new! Pl. Reina Maria Cristina",
    "t-in-min": 3,
  },
  {
    routeId: "0670",
    line: "67",
    "text-ca": "imminent",
    "t-in-s": 96,
    destination: "new! Cornellà",
    "t-in-min": 0,
  },
  {
    routeId: "2132",
    line: "V13",
    "text-ca": "2 min",
    "t-in-s": 135,
    destination: "Pl. Kennedy",
    "t-in-min": 2,
  },
  {
    routeId: "2161",
    line: "H16",
    "text-ca": "5 min",
    "t-in-s": 312,
    destination: "Pg. Zona Franca",
    "t-in-min": 5,
  },
  {
    routeId: "2130",
    line: "V13",
    "text-ca": "6 min",
    "t-in-s": 374,
    destination: "Av. Tibidabo",
    "t-in-min": 6,
  },
  {
    routeId: "2501",
    line: "D50",
    "text-ca": "10 min",
    "t-in-s": 609,
    destination: "Paral·lel",
    "t-in-min": 10,
  },
  {
    routeId: "0550",
    line: "55",
    "text-ca": "0 min",
    "t-in-s": 666,
    destination: "new! Parc de Montjuïc",
    "t-in-min": 0,
  },
];

const BUS_ROUTES3 = [
  {
    routeId: "0590",
    line: "59",
    "text-ca": "103 min",
    "t-in-s": 5,
    destination: "new!2 Pl. Reina Maria Cristina",
    "t-in-min": 103,
  },
  {
    routeId: "0670",
    line: "67",
    "text-ca": "100 min!",
    "t-in-s": 96,
    destination: "new!2 Cornellà",
    "t-in-min": 100,
  },
  {
    routeId: "2132",
    line: "V13",
    "text-ca": "Imminent!!",
    "t-in-s": 135,
    destination: "Pl. Kennedy",
    "t-in-min": 0,
  },
  {
    routeId: "2161",
    line: "H16",
    "text-ca": "0 min!",
    "t-in-s": 312,
    destination: "new!! Pg. Zona Franca",
    "t-in-min": 0,
  },
  {
    routeId: "2130",
    line: "V13",
    "text-ca": "55min",
    "t-in-s": 374,
    destination: "Av. Tibidabo",
    "t-in-min": 55,
  },
  {
    routeId: "2501",
    line: "D50",
    "text-ca": "10 min",
    "t-in-s": 609,
    destination: "Paral·lel",
    "t-in-min": 10,
  },
  {
    routeId: "0550",
    line: "55",
    "text-ca": "10 min",
    "t-in-s": 666,
    destination: "new! Parc de Montjuïc",
    "t-in-min": 10,
  },
];

module.exports = [
  {
    id: "get-bus-routes",
    url: "/bus-routes",
    method: "GET",
    variants: [
      {
        id: "success",
        response: {
          status: 200,
          body: BUS_ROUTES,
        },
      },
      {
        id: "error",
        response: {
          status: 400,
          body: {
            message: "Error",
          },
        },
      },
    ],
  },
  {
    id: "get-bus-routes-2",
    url: "/bus-routes-2",
    method: "GET",
    variants: [
      {
        id: "success",
        response: {
          status: 200,
          body: BUS_ROUTES2,
        },
      },
      {
        id: "error",
        response: {
          status: 400,
          body: {
            message: "Error",
          },
        },
      },
    ],
  },
  {
    id: "get-bus-routes-3",
    url: "/bus-routes-3",
    method: "GET",
    variants: [
      {
        id: "success",
        response: {
          status: 200,
          body: BUS_ROUTES3,
        },
      },
      {
        id: "error",
        response: {
          status: 400,
          body: {
            message: "Error",
          },
        },
      },
    ],
  },
];
