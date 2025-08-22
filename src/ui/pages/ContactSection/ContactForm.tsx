import React from "react";
import { Form, Input, InputSubmit, TextAreaWrapper } from "ui/pages/ContactSection/ContactForm.style";
export function ContactForm() {
    return (
        <Form method="post">
            <Input
                name="name"
                type="text"
                className="form-control"
                placeholder="Imię"
                required
            />
            <br />
            <Input
                name="email"
                type="text"
                className="form-control"
                placeholder="E-mail"
                required
            />
            <br />
            <TextAreaWrapper
                name="message"
                placeholder="Wiadomość"
                rows={4}
                required
            ></TextAreaWrapper>
            <br />
            <InputSubmit
                type="submit"
                className=""
                value="Wyślij"
            />
        </Form>
    );
};
