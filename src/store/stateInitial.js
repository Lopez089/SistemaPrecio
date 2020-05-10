const initialState = {
  servicePackages: [
    {
      id: "0",
      namePackages: "BASIC",

      Service: [
        {
          idService: "0",
          nameService: "Dj",
          count: 1,
          priceHour: 20,
          priceTotal: 20,
        },
        {
          idService: "1",
          nameService: "Fografia",
          count: 2,
          priceHour: 50,
          priceTotal: 100,
        },
        {
          idService: "2",
          nameService: "Animacion",
          count: 1,
          priceHour: 20,
          priceTotal: 20,
        },
      ],
      price: 140,
      info: {
        text: "Más informacion",
        url: "/#",
      },
      button: {
        text: "Contratar",
      },
    },
    {
      id: "1",
      namePackages: "PREMIUM",
      price: 250,
      Service: [
        {
          idService: "0",
          nameService: "Dj",
          count: 1,
          priceHour: 25,
          priceTotal: 25,
        },
        {
          idService: "1",
          nameService: "Fografia",
          count: 2,
          priceHour: 50,
          priceTotal: 100,
        },
        {
          idService: "2",
          nameService: "Animacion",
          count: 1,
          priceHour: 75,
          priceTotal: 75,
        },
        {
          idService: "3",
          nameService: "Fotocool",
          count: 1,
          priceHour: 50,
          priceTotal: 50,
        },
      ],
      info: {
        text: "Más informacion",
        url: "/#",
      },
      button: {
        text: "Contratar",
      },
    },
    {
      id: "2",
      namePackages: "ESTANDAR",
      price: 150,
      Service: [
        {
          idService: "0",
          nameService: "Dj",
          count: 1,
          priceHour: 25,
          priceTotal: 25,
        },
        {
          idService: "1",
          nameService: "Fografia",
          count: 1,
          priceHour: 50,
          priceTotal: 50,
        },
        {
          idService: "2",
          nameService: "Animacion",
          count: 1,
          priceHour: 75,
          priceTotal: 75,
        },
      ],
      info: {
        text: "Más informacion",
        url: "/#",
      },
      button: {
        text: "Contratar",
      },
    },
  ],
};

export default initialState;
