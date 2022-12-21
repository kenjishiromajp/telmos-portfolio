import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { LANGUAGES, useIntlProvider } from '../../hooks/useIntlProvider';

export default function ChangeLanguageButton() {
  const { locale, setLocale } = useIntlProvider();
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        size="xs"
        variant="link"
      >
        {locale}
      </MenuButton>
      <MenuList>
        {Object.values(LANGUAGES).map(value => {
          return (
            <MenuItem key={value} onClick={() => setLocale(value)}>
              {value}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
