import { Box, Drawer } from '@mui/material';
import { useBreakpoints } from 'providers/useBreakPoint';
import SimpleBar from 'simplebar-react';
import SidebarBanner from './SidebarBanner';
import SidebarItems from './SidebarItems';
import SidebarLogo from './SidebarLogo';
import logo from '../../../assets/loginlogo.png';
interface SideNavProps {
  onDrawerClose: () => void;
  onDrawerTransitionEnd: () => void;
  mobileOpen: boolean;
}
const Sidebar = ({ onDrawerClose, onDrawerTransitionEnd, mobileOpen }: SideNavProps) => {
  const { up } = useBreakpoints();
  const upLg = up('lg');

  if (upLg) {
    return (
      <Box
        sx={{
          backgroundColor: 'common.white',
          flexShrink: 0,
        }}
      >
        <Drawer
          anchor="left"
          open
          variant="permanent"
          sx={{
            backgroundColor: 'common.white',
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
            },
          }}
        >
          <Box
            sx={{
              borderRight: 1,
              borderColor: 'text.disabled',
              backgroundColor: 'common.white',
              height: 1,
            }}
          >
            <Box
              sx={{
                px: 0,
                boxShadow: 0,
              }}
            >
               <img
                  src={logo} // Replace with your image URL
                  alt="Placeholder"
                  style={{
                    width: '60px',
                    height: '60px',
                    margin: 'auto',
                    alignSelf: 'center',
                    marginTop:'20px'
                  }}
                />
              {/* <SidebarLogo /> */}
            </Box>

            <SimpleBar style={{ height: 'calc(100% - 68px)' }}>
              <Box >
                <SidebarItems />
              </Box>
            </SimpleBar>
          </Box>
        </Drawer>
      </Box>
    );
  }
  {
    /* Sidebar For Mobile */
  }

  return (
    <Drawer
      anchor="left"
      onTransitionEnd={onDrawerTransitionEnd}
      open={mobileOpen}
      onClose={onDrawerClose}
      variant="temporary"
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      PaperProps={{
        sx: {
          backgroundColor: 'common.white',
          border: '0 !important',
          boxShadow: (theme) => theme.shadows[2],
        },
      }}
    >
      {/* ------------------------------------------- */}
      <Box
        sx={{
          bgcolor: 'common.white',
          px: 3,
        }}
      >
        <SidebarLogo />
      </Box>

      {/* ------------------------------------------- */}
      <SimpleBar style={{ height: 'calc(100% - 68px)' }}>
        <>
          <SidebarItems />
          <SidebarBanner />
        </>
      </SimpleBar>
    </Drawer>
  );
};

export default Sidebar;
