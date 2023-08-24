import { Flex, Text, Input } from '@chakra-ui/react';

import { ILabeledInput } from 'components/forms/types';

function LabelInput({ label, placeholder = '', value, onChange }: ILabeledInput) {
  return (
    <Flex alignItems="center" gap="10px" mb={2}>
      <Text>{label}</Text>
      <Input value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
    </Flex>
  );
}

export default LabelInput;
