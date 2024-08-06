import React from 'react';
import { Navigate } from 'react-router-dom';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import {translate} from '@docusaurus/Translate';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import IconClose from '@theme/Icon/Close';
import NavbarLogo from '@theme/Navbar/Logo';
function CloseButton() {
  const mobileSidebar = useNavbarMobileSidebar();
  return (
    <button
      type="button"
      aria-label={translate({
        id: 'theme.docs.sidebar.closeSidebarButtonAriaLabel',
        message: 'Close navigation bar',
        description: 'The ARIA label for close button of mobile sidebar',
      })}
      className="clean-btn navbar-sidebar__close"
      onClick={() => mobileSidebar.toggle()}>
      <IconClose color="var(--ifm-color-emphasis-600)" />
    </button>
  );
}

function MobileBottomNav() {
  const mobileSidebar = useNavbarMobileSidebar();
  const ref = React.useRef(null);
  const [value, setValue] = React.useState('./');
  // const { colorMode } = useColorMode();
  colorMode = 'dark';
  const isDarkMode = colorMode === 'dark';
  const handleChange = (event, newValue) => {
      setValue(newValue);
      if (value === `/docs/Meeting Schedule`){
        <Navigate to={value} />
      }
      if (value === 'More') {
        mobileSidebar.toggle();
      }
  }

  return (
      <Box sx={{ pb: 7 }} ref = {ref}>
          <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} square={false} elevation={3}>
              <BottomNavigation
                  showLabels
                  value={value}
                  onChange={handleChange}
                  sx = {{
                      bgcolor: isDarkMode ? 'black' : 'white',
                      '& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label': {
                          color: isDarkMode ? 'white' : '#707070'
                      }
                  }}
              >   
                  <BottomNavigationAction value={'/docs/Meeting Schedule'} label="Schedule" icon={<CalendarMonthOutlinedIcon/>} />
                  <BottomNavigationAction value={'./'} label="Home" icon={<HomeOutlinedIcon/>}/>
                  <BottomNavigationAction value={'More'} label="More" icon={<MoreHorizOutlinedIcon/>}/>
              </BottomNavigation>
          </Paper>
      </Box>
  )
}


export default function NavbarMobileSidebarHeader() {
  return (
    <div className="navbar-sidebar__brand">
      <NavbarLogo />
      <NavbarColorModeToggle className="margin-right--md" />
      <CloseButton />
      
    </div>
  );
}
