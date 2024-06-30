import { ControllerRenderProps, FieldValues } from 'react-hook-form';
import { FormControl, FormItem, FormLabel } from '../../ui/form';
import { Checkbox } from '../../ui/checkbox';

type Props = {
  cuisine: string;
  field: ControllerRenderProps<FieldValues, 'cuisines'>;
};

function CusineCheckbox({ cuisine, field }: Props) {
  console.log(field);
  return (
    <FormItem className="flex items-center space-x-1 space-y-0">
      <FormControl>
        <Checkbox
          checked={field.value.includes(cuisine)}
          onCheckedChange={(checked) => {
            if (checked) {
              field.onChange([...field.value, cuisine]);
            } else {
              field.onChange(
                field.value.filter((val: string) => val !== cuisine)
              );
            }
          }}
        />
      </FormControl>
      <FormLabel>{cuisine}</FormLabel>
    </FormItem>
  );
}

export default CusineCheckbox;
