const initialState = {
  servicePackages: [
    {
      id: "0",
      namePackages: "BASIC",
      price: 90,
      Service: [
        {
          idService: "0",
          nameService: "Dj",
          count: 1,
          priceHour: 20,
        },
        {
          idService: "1",
          nameService: "Fografia",
          count: 1,
          priceHour: 50,
        },
        {
          idService: "2",
          nameService: "Animacion",
          count: 0,
          priceHour: 20,
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
      id: "1",
      namePackages: "PREMIUM",
      price: 195,
      Service: [
        {
          idService: "0",
          nameService: "Dj",
          count: 1,
          priceHour: 25,
        },
        {
          idService: "1",
          nameService: "Fografia",
          count: 1,
          priceHour: 50,
        },
        {
          idService: "2",
          nameService: "Animacion",
          count: 1,
          priceHour: 75,
        },
        {
          idService: "3",
          nameService: "Fotocool",
          count: 1,
          priceHour: 50,
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
      price: 145,
      Service: [
        {
          idService: "0",
          nameService: "Dj",
          count: 1,
          priceHour: 25,
        },
        {
          idService: "1",
          nameService: "Fografia",
          count: 1,
          priceHour: 50,
        },
        {
          idService: "2",
          nameService: "Animacion",
          count: 1,
          priceHour: 75,
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
