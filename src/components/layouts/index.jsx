import styled from "styled-components";
import { Anchor, Button, Span } from "..";
import { colors, TicketIcon, UserIcon } from "../../assets";

const headerBg = colors.headerBackground;
const mainBg = colors.mainBackground;
const greyishBrown = colors.greyishBrown;

const MainLayoutContainer = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background-color: ${mainBg};
`;

const Header = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 4.5rem;
  box-sizing: border-box;
  background-color: ${headerBg};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
  direction: rtl;
  text-align: right;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;
const HeaderContent = styled.div`
  display: flex;
  width: 90%;
  max-width: 75rem;
  align-items: center;
`;

const Left = styled.span`
  margin-right: auto;
  display: inline-flex;
`;

const Content = styled.div`
  //space to top as much as the height of the header
  margin-top: 4.5rem;
`;

export const MainLayout = ({ children }) => {
  const headerLinks = [
    { key: 1, title: "بلیط هواپیما", href: "#" },
    {
      key: 2,
      title: "رزرو هتل",
      href: "#",
    },
  ];

  const headerButtons = [
    {
      key: 1,
      title: "پیگیری خرید",
      icon: <TicketIcon />,
    },
    {
      key: 2,
      title: "ورود / ثبت‌نام",
      icon: <UserIcon />,
    },
  ];

  return (
    <MainLayoutContainer>
      <Header>
        <HeaderContent>
          <>
            <Span
              bold
              size="1.25"
              lineHeight="2"
              margin="0 0 0 1.5%"
              color={greyishBrown}
            >
              تست برنامه نویسی
            </Span>

            {headerLinks?.map((headerLink) => (
              <Anchor
                key={headerLink?.key}
                size="0.875"
                lineHeight="2"
                margin="0 1.5%"
                textDecoration="none"
                color={greyishBrown}
                href={headerLink?.href}
              >
                {headerLink?.title}
              </Anchor>
            ))}
          </>
          <Left>
            {headerButtons?.map((headerButton) => (
              <Button
                key={headerButton?.key}
                title={headerButton?.title}
                icon={headerButton?.icon}
                type={headerButton?.type}
                onClick={headerButton?.onClick}
              />
            ))}
          </Left>
        </HeaderContent>
      </Header>

      <Content>{children}</Content>
    </MainLayoutContainer>
  );
};
