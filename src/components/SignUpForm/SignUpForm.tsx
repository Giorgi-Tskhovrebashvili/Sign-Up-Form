import { Button, Input, Intro, Notification, Warning } from "..";
import { useFormik } from "formik";
import { validationSchema } from "../../utils/validation-schema";
import icon from "../../assets/Image/Group 11.png";

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  const { values, handleBlur, handleSubmit, handleChange, errors, touched } =
    formik;
  return (
    <div className="w-[375px] px-[24px] py-[88px] flex flex-col items-center justify-center gap-[25px] xl:flex-row xl:w-[1440px]">
      <Intro
        title={"Learn to code by watching others"}
        info={
          "See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable."
        }
      />
      <div className="flex flex-col gap-[20px]">
        <Notification
          time={"Try it free 7 days "}
          price={"then $20/mo. thereafter"}
        />
        <form
          onSubmit={handleSubmit}
          className="w-[327px] px-[24px] py-[24px] flex flex-col items-center gap-[10px] bg-white rounded-[10px] xl:w-[540px] xl:px-[40px] xl:py-[40px] xl:gap-[20px]"
        >
          <div className="flex flex-col items-end relative">
            <Input
              className={
                "w-[279px] h-[56px] border-solid border-2 border-gray-300 rounded-[10px] px-[15px] py-[15px] xl:w-[460px]"
              }
              id={"first-name"}
              type={"text"}
              placeholder={"First Name"}
              value={values.firstName}
              onChange={handleChange}
              style={{
                borderColor: touched.firstName && errors.firstName ? "red" : "",
              }}
              onBlur={handleBlur}
            />
            {touched.firstName && errors.firstName ? (
              <div className="text-[#FF7979] text-[11px] font-medium leading-[16.5px] italic flex">
                {errors.firstName}{" "}
                <img
                  className="absolute top-[15px] right-[15px]"
                  src={icon}
                  alt=""
                />
              </div>
            ) : null}
          </div>
          <div className="flex flex-col items-end relative">
            <Input
              className={
                "w-[279px] h-[56px] border-solid border-2 border-gray-300 rounded-[10px] px-[15px] py-[15px] xl:w-[460px]"
              }
              id={"last-name"}
              type={"text"}
              placeholder={"Last Name"}
              value={values.lastName}
              onChange={handleChange}
              style={{
                borderColor: touched.firstName && errors.firstName ? "red" : "",
              }}
              onBlur={handleBlur}
            />
            {touched.lastName && errors.lastName ? (
              <div className="text-[#FF7979] text-[11px] font-medium leading-[16.5px] italic flex">
                {errors.lastName}{" "}
                <img
                  className="absolute top-[15px] right-[15px]"
                  src={icon}
                  alt=""
                />
              </div>
            ) : null}
          </div>
          <div className="flex flex-col items-end relative">
            <Input
              className={
                "w-[279px] h-[56px] border-solid border-2 border-gray-300 rounded-[10px] px-[15px] py-[15px] xl:w-[460px]"
              }
              id={"email"}
              type={"email"}
              placeholder={"Email Address"}
              value={values.email}
              onChange={handleChange}
              style={{
                borderColor: touched.firstName && errors.firstName ? "red" : "",
              }}
              onBlur={handleBlur}
            />
            {touched.email && errors.email ? (
              <div className="text-[#FF7979] text-[11px] font-medium leading-[16.5px] italic flex">
                {errors.email}{" "}
                <img
                  className="absolute top-[15px] right-[15px]"
                  src={icon}
                  alt=""
                />
              </div>
            ) : null}
          </div>
          <div className="flex flex-col items-end relative">
            <Input
              className={
                "w-[279px] h-[56px] border-solid border-2 border-gray-300 rounded-[10px] px-[15px] py-[15px] xl:w-[460px]"
              }
              id={"password"}
              type={"password"}
              placeholder={"Password"}
              value={values.password}
              onChange={handleChange}
              style={{
                borderColor: touched.firstName && errors.firstName ? "red" : "",
              }}
              onBlur={handleBlur}
            />
            {touched.password && errors.password ? (
              <div className="text-[#FF7979] text-[11px] font-medium leading-[16.5px] italic flex">
                {errors.password}{" "}
                <img
                  className="absolute top-[15px] right-[15px]"
                  src={icon}
                  alt=""
                />
              </div>
            ) : null}
          </div>
          <Button
            children={"CLAIM YOUR FREE TRIAL"}
            className={
              "bg-[#38CC8B] text-white px-[44px] py-[15px] rounded-[10px] w-[279px] xl:w-[460px]"
            }
            type={"submit"}
          />
          <Warning
            text={"By clicking the button, you are agreeing to our "}
            link={
              "https://termify.io/terms-and-conditions-generator?gad_source=1&gclid=Cj0KCQjwztOwBhD7ARIsAPDKnkB1RSRXbisPFhOESW4yBmOOc-qhLKl7zXS_6GEf0CDmTUK6AHBga-oaAsHbEALw_wcB"
            }
            linkPath={"Terms and Services"}
          />
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
