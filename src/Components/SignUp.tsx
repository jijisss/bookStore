import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { regex } from "@lib/utils";
import { useEffect, useRef, useState } from "react";
import { TextField } from "components/molecules";
import { css } from "@emotion/react";

interface ISignUpForm {
  email: string;
  name: string;
  pw: string;
  checkPw: string;
  phone: string;
  birth: string;
}

const SignUp = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().min(2).max(10).required(),
    pw: yup.string().matches(regex.pw).required(),
    checkPw: yup
      .string()
      .oneOf([yup.ref("pw"), null])
      .required(),
    phone: yup.string().matches(regex.phone).required(),
    birth: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpForm>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(schema),
  });

  const submitForm: SubmitHandler<ISignUpForm> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(submitForm)} css={[formWrapper]}>
      <TextField
        text={"이메일"}
        name={"email"}
        inputType={"email"}
        errorMsg={errors.email && "이메일 형식이 맞지 않습니다."}
        register={register}
      />
      <TextField
        text={"닉네임"}
        name={"name"}
        errorMsg={errors.name && "2글자 이상 입력해주세요."}
        register={register}
      />
      <TextField
        text={"비밀번호"}
        name={"pw"}
        errorMsg={
          errors.pw && "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
        }
        register={register}
      />
      <TextField
        text={"비밀번호 확인"}
        name={"checkPw"}
        errorMsg={errors.checkPw && "떼잉~ 비밀번호가 똑같지 않아요!"}
        register={register}
      />
      <TextField
        text={"전화번호"}
        name={"phone"}
        errorMsg={errors.phone && "올바른 형식이 아닙니다!"}
        register={register}
      />
      <TextField
        text={"생년월일"}
        name={"birth"}
        inputType="date"
        errorMsg={errors.birth && "생년월일을 입력해주세요."}
        register={register}
      />
      <button type="submit">회원가입</button>
    </form>
  );
};

export default SignUp;

const formWrapper = css`
  width: 500px;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: 0 auto;
  padding: 50px;
`;
