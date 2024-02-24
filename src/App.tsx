import { useState } from 'react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import {
  Button,
  FoodWrapper,
  PriceWrapper,
  Label,
  Form,
  Container,
  Input,
  Errors
} from './styles/styled-components';
import { Select } from 'antd';
import { ListContainer } from './components/ListContainer';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type FormFields = {
  foodType?: string;
  price?: number | null;
};

function App() {
  const [value, setValue] = useState('');
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [data, setData] = useState<{ id: number; name: string; price: number }[]>([]);
  const selectOptions = [
    { value: 'warzywa', label: 'Warzywa' },
    { value: 'owoce', label: 'Owoce' }
  ];

  const schema = yup.object({
    foodType: yup.string().required('Typ jedzenia jest wymagany.'),
    price: yup.number().required('Cena jest wymagana.')
  });

  const form = useForm<FormFields>({
    resolver: yupResolver<FormFields>(schema),
    defaultValues: {
      price: null
    }
  });

  const { control, handleSubmit, resetField } = form;
  const { errors } = form.formState;

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  const addPriceHandler = (id: number) => {
    const price = form.getValues('price');
    if (price !== null) {
      const updatedData = data.map((item) => {
        if (item.id === id) {
          return { ...item, price: Number(price) };
        }
        return item;
      });
      setData(updatedData);
      resetField('price');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FoodWrapper>
          <Label>Jedzenie</Label>
          <Controller
            name="foodType"
            control={control}
            render={({ field }) => (
              <>
                <Select
                  {...field}
                  style={{ width: 120 }}
                  onChange={(value) => {
                    field.onChange(value);
                    setValue(value);
                  }}
                  placeholder="Wybierz">
                  {selectOptions.map((option) => (
                    <Select.Option key={option.value} value={option.value}>
                      {option.label}
                    </Select.Option>
                  ))}
                </Select>
                {errors && <Errors>{errors.foodType?.message}</Errors>}
              </>
            )}
          />
          <Button type="submit">Wyślij</Button>
        </FoodWrapper>
        <ListContainer
          value={value}
          selectedIds={selectedIds}
          setSelectedIds={setSelectedIds}
          data={data}
          setData={setData}
        />
        <PriceWrapper>
          {data.map(
            (x) =>
              selectedIds.includes(x.id) && (
                <>
                  <Label>{x.name}</Label>
                  <Controller
                    name={'price'}
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="text"
                        placeholder="Cena"
                        value={field.value?.toString() || ''}
                      />
                    )}
                  />
                  <Button type="submit" onClick={() => addPriceHandler(x.id)}>
                    Dodaj cenę
                  </Button>
                </>
              )
          )}
        </PriceWrapper>
      </Form>
    </Container>
  );
}
export default App;
