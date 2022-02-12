import { Container } from "./style"
import { Formik, Form, Field, } from 'formik';


export function FormNewsLetter() {



    return (
        <Container>
            <Formik
                initialValues={{
                    email: "",
                }}
                onSubmit={async (values) => {
                    try {
                        const EmailProps = {
                            complement: values.email,
                        };
                    }catch (error) {

                    }
                }}
            >
                <Form>
                    <section>
                        <Field name="email" />
                        <button type="submit">Enviar</button>
                    </section>
                </Form>
            </Formik>
        </Container>
    )

}