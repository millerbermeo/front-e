import { useMutation, UseMutationOptions, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
}


interface RegisterRequest {
  username: string;
  email: string;
  hashed_password?: string;
}

const loginRequest = async (credentials: LoginRequest): Promise<LoginResponse> => {
  try {
        const { data } = await axios.post<LoginResponse>(
        'http://82.25.95.127:8000/api/v1/auth/login',
        credentials,
        { withCredentials: true }
        );
    return data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Error de conexión');
  }
};

const useLogin = () => {

    const mutation = useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: loginRequest,
    onSuccess: (data) => {
    },
    onError: (error: any) => {
      console.error("Error al hacer login:", error.message);
    },
  });

  return mutation;
};

export default useLogin;




// Registrar una nueva categoría
export const useRegisterAuth = () => {

  // const queryClient = useQueryClient();


  return useMutation({
    mutationFn: async (register: RegisterRequest) => {
      const { data } = await axios.post('http://82.25.95.127:8000/api/v1/auth/register', register);
      return data;
    },
    onSuccess: async ():Promise<void> => {
    },
    // onError: (error: AxiosError<ServerError>) => {
    //   const errorMessage: string[] | string = error.response?.data?.message || "Error al registrar categoría";
    //   const messagesArray: string[] = Array.isArray(errorMessage) ? errorMessage : [errorMessage];
    //   messagesArray.forEach(msg => notify(msg, "error"));
    // },
  });
};
