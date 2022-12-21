import { Box, Container, HStack, Link, Stack } from '@chakra-ui/react';
import ChangeLanguageButton from '../ChangeLanguageButton/ChangeLanguageButton';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    label: 'Filosofia',
    href: 'Lol',
  },
  {
    label: 'Formacion',
    href: 'Lol',
  },
  {
    label: 'En los medios',
    href: '#',
  },
  {
    label: 'Contacto',
    href: '#',
  },
];

export default function Header() {
  return (
    <Box>
      <Container width="container.xl" maxW="container.xl">
        <HStack justifyContent="space-between">
          <Stack
            as="nav"
            direction="row"
            spacing={3}
            align="center"
            alignSelf="center"
            position="relative"
          >
            {NAV_ITEMS.map(({ href, label }) => (
              <Link
                p={2}
                href={href}
                fontSize="sm"
                fontWeight={500}
                transition="all 0.3s ease"
                _hover={{
                  textDecoration: 'none',
                  color: 'red',
                }}
              >
                {label}
              </Link>
            ))}
          </Stack>
          <ChangeLanguageButton />
        </HStack>
      </Container>
    </Box>
  );
}
