import { Container, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { Button } from '@material-ui/core';
import PhoneInTalkSharpIcon from '@material-ui/icons/PhoneInTalkSharp';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import SchoolSharpIcon from '@material-ui/icons/SchoolSharp';


export default function Footer() {

  return(
    <Box bgcolor="purple" color="white" className="footerBox">
      <Container maxWidth="1g">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4} >
          <Button startIcon={<PhoneInTalkSharpIcon/>}> Contact Us </Button>
            {/* <Box borderBottom={1}>Contact Us</Box> */}
           
            <Box>
              <Typography>
                Address:REVA University,
                Rukmini Knowledge Park,
                Kattigenahalli Yelahanka,
                Bangalore 560064<hr/>
                Email:admissions@reva.edu.in<hr/>
              </Typography>
            </Box>

            <Box>
               <Typography>
                Phone Number :+91- 90211 90211
                <br/>     +91-80-46966966
              </Typography>
            </Box>

          </Grid>

          <Grid item xs={12} sm={4}>
          
            {/* <Box borderBottom={1}>Home</Box> */}
            <Button startIcon={<HomeSharpIcon/>}> Home </Button>
            
            <Box>
              <Link href="/students/add" color="inherit">
                AddStudent
              </Link>
            </Box>

            <Box>
              <Link href="/students/showall" color="inherit">
                ShowStudents
              </Link>
            </Box>

          </Grid>
            <Grid item xs={12} sm={4}>
            {/* <Box borderBottom={1}>Why Reva</Box> */}
            <Button startIcon={<SchoolSharpIcon/>}> Why Reva </Button>
            <Box>
              <Link href="https://reva.edu.in/teaching-methodology" color="inherit">
              Teaching Methodology
              </Link>
            </Box>
            <Box>
              <Link href="https://reva.edu.in/competitive-environment" color="inherit">
              Competitive Environment
              </Link>
            </Box>
            <Box>
              <Link href="https://reva.edu.in/scholarships" color="inherit">
              Scholarships
              </Link>
            </Box>
            <Box>       
            <Link href="https://reva.edu.in/awards" color="inherit">
            Awards and Rankings
            </Link>
            </Box>
            <Box>
              <Link href="https://reva.edu.in/students-achievements" color="inherit">
              Students Achievements
              </Link>
            </Box>
            <Box>
              <Link href="https://reva.edu.in/women-education" color="inherit">
              Women Education
              </Link>
            </Box>
            <Box>
              <Link href="https://reva.edu.in/social-initiatives-csr" color="inherit">
                Social Initiatives
              </Link>
            </Box>
            
          </Grid> 
         </Grid>
         
        <Box textAlign="center" pt={{xs: 5, sm: 10}} pb={{xs:5, sm:0}} >
          Copywrite@2022
        </Box>
      </Container>
    </Box>
  );
  
}