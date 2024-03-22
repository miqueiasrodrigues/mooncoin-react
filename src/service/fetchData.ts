import { IResponse } from "../models/interfaces/Response";

export const fetchData = async (
  path: string = "",
  queryParams: Record<string, string | number> = {}
): Promise<IResponse> => {
  try {
    const url = new URL(`https://api.coingecko.com/api/v3/${path}`);
    Object.entries(queryParams).forEach(([key, value]) => {
      url.searchParams.append(key, String(value));
    });

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      return {
        status: "error",
        message: "Não foi possível recuperar os dados.",
        data: null,
      };
    }
    const data = await response.json();

    return {
      status: "success",
      message: "Dados recuperados com sucesso.",
      data: data,
    };
  } catch (error) {
    return {
      status: "error",
      message: "Erro na comunicação com o servidor.",
      data: null,
    };
  }
};
