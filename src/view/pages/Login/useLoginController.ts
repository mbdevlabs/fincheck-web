import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const schema = z.object({
  email: z.email("Informe um e-mail válido").nonempty("E-mail é obrigratorio"),
  password: z
    .string()
    .nonempty("Senha é obrigatorio")
    .min(8, "Senha deve conter ao menos 8 dígitos"),
});

type FormData = z.infer<typeof schema>;

export function useLoginController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = hookFormHandleSubmit((data) => {
    console.log(`Chama Api`, data);
  });

  return {
    handleSubmit,
    register,
    errors,
  };
}
