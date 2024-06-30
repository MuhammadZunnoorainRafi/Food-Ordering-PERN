import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { RestaurantFormType, restaurantFormSchema } from '../../../lib/schemas';
import { Form } from '../../ui/form';
import { Button } from '../../ui/button';
import DetailsSection from './DetailsSection';
import CusineSection from './CusineSection';

function ManageRestaurantForm() {
  const form = useForm<RestaurantFormType>({
    defaultValues: {
      name: '',
      city: '',
      cuisines: [],
      menuItems: [{ name: '', price: 0 }],
    },
    resolver: zodResolver(restaurantFormSchema),
  });

  const formSubmit = (formDataJson: RestaurantFormType) => {
    console.log(formDataJson);
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(formSubmit)}
          className="space-y-8 bg-gray-50 p-10 rounded-lg"
        >
          <DetailsSection />
          <CusineSection />
          {
            //  isLoading ? <LoadingButton /> :
            <Button type="submit">Submit</Button>
          }
        </form>
      </Form>
    </div>
  );
}

export default ManageRestaurantForm;
