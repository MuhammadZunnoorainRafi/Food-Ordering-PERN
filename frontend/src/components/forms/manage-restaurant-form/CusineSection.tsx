import { useFormContext } from 'react-hook-form';
import {
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '../../ui/form';
import { cuisineList } from '../../../lib/constants';
import CusineCheckbox from './CusineCheckbox';

function CusineSection() {
  const { control } = useFormContext();
  return (
    <div>
      <h1 className="text-2xl font-bold">Cusine</h1>
      <FormDescription>Cusine Section</FormDescription>
      <FormField
        control={control}
        name="cuisines"
        render={({ field }) => (
          <FormItem>
            <div className="grid md:grid-cols-5 gap-2">
              {cuisineList.map((cuisine) => (
                <CusineCheckbox key={cuisine} cuisine={cuisine} field={field} />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

export default CusineSection;
