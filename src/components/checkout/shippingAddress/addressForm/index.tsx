import { Field, Form, Formik } from "formik";
import { ChangeEvent, useCallback, useState } from "react";
import ZipCodeMask from "../../../../ui/kit/ZipCodeMask";
import { Container } from "./style";

export function AddressForm() {
  const [zipCode, setZipCode] = useState<string>("");

  const handleChangeZipCode = useCallback(
    async (zipCode) => {
      setZipCode(zipCode);
    },
    [setZipCode]
  );

  return (
    <Container>
      <Formik initialValues={{}} onSubmit={async (values) => {}}>
        <Form>
          <section>
            <ZipCodeMask
              value={zipCode}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                handleChangeZipCode(event.target.value);
              }}
            />
          </section>
        </Form>
      </Formik>
    </Container>
  );
}
