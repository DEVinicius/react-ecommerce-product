import { Field, Form, Formik } from "formik";
import { ChangeEvent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { InsertAddress } from "../../../../redux/modules/address/actions/insertAddress.action";
import { IAddress } from "../../../../redux/modules/address/dto/Address.dto";
import { searchAddressByApi } from "../../../../redux/modules/address/reducers/request/searchAddressByApi.request";
import { Button } from "../../../../ui/button";
import ZipCodeMask from "../../../../ui/kit/ZipCodeMask";
import { Container } from "./style";

export function AddressForm() {
  const dispatch = useDispatch();

  const handleSearchZipCode = useCallback(async(zipCode: string):Promise<IAddress | void> => {
      try {
        const address = await searchAddressByApi(zipCode);
        if(!address) {
          throw new Error("Endereço não encontrado")
        }

        return address;
      } catch (error) {
        
      }
  }, []);

  return (
    <Container>
      <Formik
        initialValues={{
          zipCode: "",
          address: "",
          identifier: "",
          state: "",
          city: "",
          district: "",
          complement: "",
        }}
        onSubmit={async (values) => {
          try {
            dispatch(InsertAddress({
              address: values as IAddress
            }))
          } catch (error) {
            
          }
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <section>
              <ZipCodeMask
                value={props.values.zipCode}
                onChange={async (event: ChangeEvent<any>) => {
                  props.handleChange(event);
                  const address = await handleSearchZipCode(event.target.value);

                  if(!address) {
                    return
                  }

                  props.setFieldValue("address", address.address)
                  props.setFieldValue("state", address.state)
                  props.setFieldValue("city", address.city)
                  props.setFieldValue("district", address.district)
                }}
              />
            </section>
            <section>
              <input type="text" name="address" value={props.values.address} required placeholder="Endereço" onChange={props.handleChange}/>
              <input type="text" name="identifier" value={props.values.identifier} required placeholder="Número" onChange={props.handleChange}/>
            </section>
            <section>
              <input type="text" name="state" value={props.values.state} required placeholder="Estado" onChange={props.handleChange}/>
              <input type="text" name="city" value={props.values.city} required placeholder="Cidade" onChange={props.handleChange}/>
            </section>
            <section>
              <input type="text" name="district" value={props.values.district} required placeholder="Bairro" onChange={props.handleChange}/>
              <input type="text" name="complement" value={props.values.complement} placeholder="Complemento" onChange={props.handleChange}/>
            </section>
            
            <input type="submit" value="Adicionar Endereço" />
          </form>
        )}
      </Formik>
    </Container>
  );
}
