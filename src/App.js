import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box"
import Button from '@mui/material/Button';
import { Avatar, colors, Container, Stack, styled,Grid} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { Send } from "@mui/icons-material";
import { blue } from "@mui/material/colors";
import profileImg from './assets/ProfileImage.png'
import IMG1 from './assets/IMG1.png'
import IMG2 from './assets/IMG2.png'
import IMG3 from './assets/IMG3.png'
import IMG4 from './assets/IMG4.png'
import IMG5 from './assets/IMG5.png'
import IMG6 from './assets/IMG6.png'
import MAP from './assets/map.png'
import P1 from './assets/p1.png'
import P2 from './assets/p2.png'

function App() {
  return (
    <Box 
    sx={{
    Height: "100vh",
    bgcolor: "#F1F1F1",
    fontFamily: "DM Sans, sans-serif",
    width:"100%",
    overflow:"hidden"
  }}>
      <Grid container spacing={2} sx={{
          px: "8px",gap: { xs: "0px", sm: "16px" }, height:"100%",
          flexWrap: "wrap", flexDirection: { xs: "column", sm: "row" },
        }}>

        {/*sidebar*/}
        <Grid item size={{xs:12, sm:2}}> 
          <Box color={'white'} bgcolor={'#181818'} sx={{p: "12px", borderRadius: "8px", mb: { xs: "0px", sm:"auto"}, 
          height: {xs:"80px", sm:"calc(100vh - 16px)"}, boxSizing: "border-box", overflow: {xs: "hidden"}, overflowY:{ sm:"auto"},
          display:"flex", flexDirection:"column",  width: "100%",
          px: {sm: "0px", md:"12px"}, justifyContent: 'space-between', top: 1, flexShrink:0
          }}>

            <Stack direction={{xs:"row", sm:"column"}} sx={{
          flexDirection: { xs: "row", sm: "column" },
          gap: { xs: "4px", sm: "20px"},
          alignItems: "flex-start", 
        }}>
        <Stack
          direction={{ xs: "row", sm: "column" }} alignItems="center"
          gap={{ xs: "12px", sm: "8px" }} sx={{ width: "100%" }}>
          <Avatar src={profileImg}
            sx={{height: 40, width: 40, flexShrink: 0 }}/>

          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center",
              alignItems: { xs: "flex-start", sm: "center" }}}>
            <Typography sx={{ color: "white", fontSize: {xs: "14px", sm: "20px", md: "12px",
              lg: "16px"}, display: "block", fontWeight: 500, lineHeight: 1.2,
              textAlign: { xs: "left", sm: "center" }, whiteSpace: "nowrap"}}>
              Indica Watson </Typography>

            <Typography sx={{ color: "#7F7F7F", fontSize: { xs: "12px",sm: "14px",md: "10px",lg: "12px"},
                display: "block", lineHeight: 1.2, textAlign: { xs: "left", sm: "center" } }}>
              Real Estate Builders</Typography>
          </Box>
        </Stack>

            <Stack width="100%">
            <Box component="ul" sx={{ listStyle: "none", p: 0,
              m: 0, display: { xs: "none", sm: "flex" }, flexDirection: "column",
              color: "#7F7F7F",}}>

            <Box component="li" sx={{display: "flex", gap: "12px",
              p: "12px", borderRadius: "8px", "&:hover": { bgcolor: "#4a0e1f", color: "white" }}}>
              <i className="bi bi-box"></i> Dashboard </Box>

            <Box component="li" sx={{ display: "flex", gap: "12px", p: "12px", borderRadius: "8px",
              "&:hover": { bgcolor: "#4a0e1f", color: "white" }}}>
              <i className="bi bi-house-door"></i> Discover </Box>

            <Box component="li" sx={{display: "flex", gap: "12px",
              p: "12px", borderRadius: "8px", "&:hover": { bgcolor: "#4a0e1f", color: "white" }
              }}><i className="bi bi-chat-right-dots"></i> Inbox </Box>

            <Box component="li" sx={{display: "flex", gap: "12px",
              p: "12px", borderRadius: "8px", "&:hover": { bgcolor: "#4a0e1f", color: "white" }}}>
              <i className="bi bi-wallet"></i> My Wallet </Box>

            <Box component="li" sx={{display: "flex",gap: "12px",
              p: "12px",borderRadius: "8px","&:hover": { bgcolor: "#4a0e1f", color: "white" }}}> 
              <i className="bi bi-funnel"></i> Analytics</Box>

            <Box component="li" sx={{display: "flex",gap: "12px",
              p: "12px", borderRadius: "8px", "&:hover": { bgcolor: "#4a0e1f", color: "white" }}}>
              <i className="bi bi-bell"></i> Notifications </Box>

            <Box component="li" sx={{display: "flex", gap: "12px",
              p: "12px", borderRadius: "8px", "&:hover": { bgcolor: "#4a0e1f", color: "white" }}}>
              <i className="bi bi-gear"></i> Settings </Box>
            </Box>
            </Stack>
            </Stack>
            
            
            <Box sx={{display: { xs: "none", sm: "flex" }, flexDirection: "column",
              gap: "16px",mt: "auto", ml: "12px", color: "#7F7F7F", mt:"auto"}}>

              <Box sx={{ display: "flex", gap: "8px" }}><i className="bi bi-question-octagon"></i>
                Help & Support </Box>

              <Box sx={{ display: "flex", gap: "8px", color: "red" }}> <i className="bi bi-box-arrow-left"></i>
                Log Out </Box>
            </Box>
            
          </Box>

        </Grid>

        <Grid item size={{xs:12 ,sm:10}} sx={{overflowY: "auto", height:{xs: "calc(100vh - 80px)",  sm: "100vh"},pb: "16px"}}>
            <Box display="flex" gap="20px" color="#7F7F7F"sx={{
              overflowY: 'auto', px: "0px"}}>
              <Typography sx={{ color: "#FF5A5F", borderBottom: "2px solid #FF5A5F", 
                pb: "4px", fontWeight:"500"}}>Buy</Typography>
              <Typography>Sell</Typography>
              <Typography>Rent</Typography>
              <Typography>Compare</Typography>
            </Box>

            <Box sx={{ bgcolor: "white", mt: "16px", mb: "16px", px: "16px",
              py: "12px", borderRadius: "12px",}}>

                <Box display="flex" justifyContent="space-between" p="12px">
                  <Typography sx={{fontSize:{xs:"14px", sm:"16px"},
                  fontWeight:500}}> 249 Results</Typography>
                  <Box display="flex" alignItems="center" gap="8px">
                    <Typography sx={{ fontSize: "12px",}}>
                      May View
                    </Typography>
                    <i class="bi bi-toggle2-off"></i>
                  </Box>
                </Box>

                <Box sx={{display:"flex", flexDirection:{xs:"column", md:"row"},
                  justifyContent:"space-between", m:"12px", gap:"16px"}}>
                    <Box sx={{border: "1px solid #ccc", borderRadius:"9999px",
                      display:"flex", justifyContent: "space-between",alignItems:"center",
                      color:"#B7BFC5", width:"200px",fontSize:{xs:"0.75rem", md:"10px",lg:"0.875rem"},
                      p: { xs: "12px", md: "8px", lg: "12px" }}}>
                        <Typography sx={{fontSize:"inherit",color:"inherit"}}>
                          Search Here...
                        </Typography>
                          <i className="bi bi-search" style={{ color: 'red', fontSize: 'inherit' }} ></i>
                    </Box>

                    <Box sx={{border: "1px solid #ccc", borderRadius:"9999px",
                      display:"flex", justifyContent: "space-between",alignItems:"center",
                      color:"#B7BFC5", width:"200px",fontSize:{xs:"0.75rem", sm:"10px",lg:"0.85rem"},
                      p: { xs: "12px", md: "8px", lg: "12px" }}}>
                        <Typography sx={{fontSize:"inherit",color:"inherit"}}>
                          Price
                        </Typography>
                          <i className="bi bi-currency-dollar" style={{ color: 'red', fontSize: 'inherit' }} ></i>
                    </Box>

                    <Box sx={{border: "1px solid #ccc", borderRadius:"9999px",
                      display:"flex", justifyContent: "space-between",alignItems:"center",
                      color:"#B7BFC5", width:"200px",fontSize:{xs:"0.75rem", sm:"10px",lg:"0.85rem"},
                      p: { xs: "12px", md: "8px", lg: "12px" },backgroundColor:"#FF3B3B"}}>
                        <Typography sx={{fontSize:"inherit",color:"white"}}>
                          2-4 Beds
                        </Typography>
                          <i className="bi bi-chevron-down" style={{ color: 'white', fontSize: 'inherit' }} ></i>
                    </Box>

                    <Box sx={{border: "1px solid #ccc", borderRadius:"9999px",
                      display:"flex", justifyContent: "space-between",alignItems:"center",
                      color:"#B7BFC5", width:"200px",fontSize:{xs:"0.75rem", sm:"10px",lg:"0.85rem"},
                      p: { xs: "12px", md: "8px", lg: "12px" }}}>
                        <Typography sx={{fontSize:"inherit",color:"inherit"}}>
                          Property Type
                        </Typography>
                          <i className="bi bi-chevron-down" style={{ color: 'red', fontSize: 'inherit' }} ></i>
                    </Box>

                    <Box sx={{border: "1px solid #ccc", borderRadius:"9999px",
                      display:"flex", justifyContent: "space-between",alignItems:"center",
                      color:"#B7BFC5", width:"200px",fontSize:{xs:"0.75rem", sm:"10px",lg:"0.85rem"},
                      p: { xs: "12px", md: "8px", lg: "12px" }}}>
                        <Typography sx={{fontSize:"inherit",color:"inherit"}}>
                          Filters
                        </Typography>
                          <i className="bi bi-filter" style={{ color: 'red', fontSize: 'inherit' }} ></i>
                    </Box>
                  </Box>

                  <Box sx={{display:"flex",gap:"16px",mx:"12px",my:"20px",
                    color:"#181818",fontSize:{xs:"12px",sm:"16px"}
                  }}>
                    <Typography sx={{color:"#ff2222",fontSize:"inherit"}}>Recommended</Typography>
                    <Typography sx={{fontSize:"inherit",color:"inherit"}}>Popular</Typography>
                    <Typography sx={{fontSize:"inherit",color:"inherit"}}>Nearest</Typography>
                  </Box>

                  <Grid container spacing={2}>
                    <Grid item size={{xs:12,md:9}}>
                      <Grid container spacing={2}>

                        <Grid item size={{xs:12,sm:4}}>
                          <Box sx={{backgroundColor:"#F1F1F1",
                            borderRadius:"16px", p: 2,}}>
                              <Box component="img" src={IMG1}
                              alt="The Stables" sx={{width:"100%",
                                objectFit:"cover", borderRadius:"12px"}}/>
                                <Box>
                                  <Typography sx={{color:"#181818",
                                  fontSize:{xs:"14px",sm:"12px",md:"14px"},fontWeight: 700,
                                  mt:1,}}>
                                    The Stables
                                  </Typography>
                                  <Typography sx={{ color: "#ef4444",
                                    fontSize: { md: "0.75rem" }, display: "flex",
                                    alignItems: "center", gap: 0.5,}}>
                                  <i className="bi bi-currency-dollar"></i>
                                  9540.99
                                </Typography>

                                <Typography sx={{color: "#7F7F7F", 
                                fontSize: { xs: "0.75rem", sm: "10px", md: "0.75rem" },
                                mt: 1, display: "flex", alignItems: "center",
                                gap: 0.5,whiteSpace: "nowrap",}}>
                                  <i className="bi bi-geo-alt-fill"></i>
                                  Terry Lane, Golden CO 80403
                                </Typography>
                                </Box>
                          </Box>
                        </Grid>

                        <Grid item size={{xs:12,sm:4}}>
                          <Box sx={{backgroundColor:"#F1F1F1",
                            borderRadius:"16px", p: 2,}}>
                              <Box component="img" src={IMG1}
                              alt="The Old Rectory" sx={{width:"100%",
                                objectFit:"cover", borderRadius:"12px"}}/>
                                <Box>
                                  <Typography sx={{color:"#181818",
                                  fontSize:{xs:"14px",sm:"12px",md:"14px"},fontWeight: 700,
                                  mt:1,}}>
                                    The Old Rectory
                                  </Typography>
                                  <Typography sx={{ color: "#ef4444",
                                    fontSize: { md: "0.75rem" }, display: "flex",
                                    alignItems: "center", gap: 0.5,}}>
                                  <i className="bi bi-currency-dollar"></i>
                                  5999.99
                                </Typography>

                                <Typography sx={{color: "#7F7F7F", 
                                fontSize: { xs: "0.75rem", sm: "10px", md: "0.75rem" },
                                mt: 1, display: "flex", alignItems: "center",
                                gap: 0.5,whiteSpace: "nowrap",}}>
                                  <i className="bi bi-geo-alt-fill"></i>
                                  Yule Street, Arvada CO 80007
                                </Typography>
                                </Box>
                          </Box>
                        </Grid>

                        <Grid item size={{xs:12,sm:4}}>
                          <Box sx={{backgroundColor:"#F1F1F1",
                            borderRadius:"16px", p: 2,}}>
                              <Box component="img" src={IMG1}
                              alt="Holly Cottage" sx={{width:"100%",
                                objectFit:"cover", borderRadius:"12px"}}/>
                                <Box>
                                  <Typography sx={{color:"#181818",
                                  fontSize:{xs:"14px",sm:"12px",md:"14px"},fontWeight: 700,
                                  mt:1,}}>
                                    Holly Cottage
                                  </Typography>
                                  <Typography sx={{ color: "#ef4444",
                                    fontSize: { md: "0.75rem" }, display: "flex",
                                    alignItems: "center", gap: 0.5,}}>
                                  <i className="bi bi-currency-dollar"></i>
                                  2998.99
                                </Typography>

                                <Typography sx={{color: "#7F7F7F", 
                                fontSize: { xs: "0.75rem", sm: "10px", md: "0.75rem" },
                                mt: 1, display: "flex", alignItems: "center",
                                gap: 0.5,whiteSpace: "nowrap",whiteSpace: "nowrap",}}>
                                  <i className="bi bi-geo-alt-fill"></i>
                                  Alice Court, Annapolis MD 21401
                                </Typography>
                                </Box>
                          </Box>
                        </Grid>

                        <Grid item size={{xs:12,sm:4}}>
                          <Box sx={{backgroundColor:"#F1F1F1",
                            borderRadius:"16px", p: 2,}}>
                              <Box component="img" src={IMG1}
                              alt="Meadow View" sx={{width:"100%",
                                objectFit:"cover", borderRadius:"12px"}}/>
                                <Box>
                                  <Typography sx={{color:"#181818",
                                  fontSize:{xs:"14px",sm:"12px",md:"14px"},fontWeight: 700,
                                  mt:1,}}>
                                    Meadow View
                                  </Typography>
                                  <Typography sx={{ color: "#ef4444",
                                    fontSize: { md: "0.75rem" }, display: "flex",
                                    alignItems: "center", gap: 0.5,}}>
                                  <i className="bi bi-currency-dollar"></i>
                                  9540.99
                                </Typography>

                                <Typography sx={{color: "#7F7F7F", 
                                fontSize: { xs: "0.75rem", sm: "10px", md: "0.75rem" },
                                mt: 1, display: "flex", alignItems: "center",
                                gap: 0.5,whiteSpace: "nowrap",}}>
                                  <i className="bi bi-geo-alt-fill"></i>
                                  Doane Street, Fremont CA 94538
                                </Typography>
                                </Box>
                          </Box>
                        </Grid>

                        <Grid item size={{xs:12,sm:4}}>
                          <Box sx={{backgroundColor:"#F1F1F1",
                            borderRadius:"16px", p: 2,}}>
                              <Box component="img" src={IMG1}
                              alt="Greenacres" sx={{width:"100%",
                                objectFit:"cover", borderRadius:"12px"}}/>
                                <Box>
                                  <Typography sx={{color:"#181818",
                                  fontSize:{xs:"14px",sm:"12px",md:"14px"},fontWeight: 700,
                                  mt:1,}}>
                                    Greenacres
                                  </Typography>
                                  <Typography sx={{ color: "#ef4444",
                                    fontSize: { md: "0.75rem" }, display: "flex",
                                    alignItems: "center", gap: 0.5,}}>
                                  <i className="bi bi-currency-dollar"></i>
                                  5999.99
                                </Typography>

                                <Typography sx={{color: "#7F7F7F", 
                                fontSize: { xs: "0.75rem", sm: "10px", md: "0.75rem" },
                                mt: 1, display: "flex", alignItems: "center",
                                gap: 0.5,whiteSpace: "nowrap",}}>
                                  <i className="bi bi-geo-alt-fill"></i>
                                  Terry Lane, Golden CO 80403
                                </Typography>
                                </Box>
                          </Box>
                        </Grid>

                        <Grid item size={{xs:12,sm:4}}>
                          <Box sx={{backgroundColor:"#F1F1F1",
                            borderRadius:"16px", p: 2,}}>
                              <Box component="img" src={IMG1}
                              alt="White Cottage" sx={{width:"100%",
                                objectFit:"cover", borderRadius:"12px"}}/>
                                <Box>
                                  <Typography sx={{color:"#181818",
                                  fontSize:{xs:"14px",sm:"12px",md:"14px"},fontWeight: 700,
                                  mt:1,}}>
                                    White Cottage
                                  </Typography>
                                  <Typography sx={{ color: "#ef4444",
                                    fontSize: { md: "0.75rem" }, display: "flex",
                                    alignItems: "center", gap: 0.5,}}>
                                  <i className="bi bi-currency-dollar"></i>
                                  2998.99
                                </Typography>

                                <Typography sx={{color: "#7F7F7F", 
                                fontSize: { xs: "0.75rem", sm: "10px", md: "0.75rem" },
                                mt: 1, display: "flex", alignItems: "center",
                                gap: 0.5,whiteSpace: "nowrap",}}>
                                  <i className="bi bi-geo-alt-fill"></i>
                                  Yule Street, Arvada CO 80007
                                </Typography>
                                </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item size={{xs:12,md:3}}>
                      <Box sx={{backgroundColor:"#F1F1F1", borderRadius: "12px",
                        p: "12px", mb: {xs: 3, md: 0, lg: 3}}}>
                          <Box sx={{display:"flex", justifyContent:"space-between",mb:1,
                            fontSize:{ md: "0.875rem", lg: "1rem" }}}>
                              <Typography variant="body2" sx={{ fontSize: { md: 14, lg: 16 } }}>
                              Recent Message
                            </Typography>
                            <i className="bi bi-three-dots-vertical" />
                          </Box>

                          <Box sx={{display:"flex", flexDirection:{xs:"column",sm:"row",md:"column"},
                          mt:"12px",gap: { sm: 5, md: 0 }}}>
                            <Box sx={{display:"flex", flexDirection:"column",
                              gap:{ xs:1.5, md:2.5}}}>

                              <Box sx={{display:"flex",
                                justifyContent:"flex-start",alignItems:"center"}}>
                                  <Box component="img" src={P1} sx={{width:{xs:"36px",sm:"40px"}}}></Box>
                                  <Box sx={{ml:"12px"}}>
                                    <Typography sx={{fontSize:12, color:"#181818"}}>James Benny</Typography>
                                    <Typography sx={{fontSize:10, color:"#7F7F7F"}}>
                                      Hey, Let me know if you're still available...
                                    </Typography>
                                  </Box>
                              </Box>

                              <Box sx={{display:"flex",
                                justifyContent:"flex-start",alignItems:"center"}}>
                                  <Box component="img" src={P2} sx={{width:{xs:"36px",sm:"40px"}}}></Box>
                                  <Box sx={{ml:"12px"}}>
                                    <Typography sx={{fontSize:12, color:"#181818"}}>James Benny</Typography>
                                    <Typography sx={{fontSize:10, color:"#7F7F7F"}}>
                                      Hey, Let me know if you're still available...
                                    </Typography>
                                  </Box>
                              </Box>

                              <Box sx={{display:"flex",
                                justifyContent:"flex-start",alignItems:"center"}}>
                                  <Box component="img" src={P1} sx={{width:{xs:"36px",sm:"40px"}}}></Box>
                                  <Box sx={{ml:"12px"}}>
                                    <Typography sx={{fontSize:12, color:"#181818"}}>James Benny</Typography>
                                    <Typography sx={{fontSize:10, color:"#7F7F7F"}}>
                                      Hey, Let me know if you're still available...
                                    </Typography>
                                  </Box>
                              </Box>

                              <Box sx={{display:"flex",
                                justifyContent:"flex-start",alignItems:"center"}}>
                                  <Box component="img" src={P2} sx={{width:{xs:"36px",sm:"40px"}}}></Box>
                                  <Box sx={{ml:"12px"}}>
                                    <Typography sx={{fontSize:12, color:"#181818"}}>James Benny</Typography>
                                    <Typography sx={{fontSize:10, color:"#7F7F7F"}}>
                                      Hey, Let me know if you're still available...
                                    </Typography>
                                  </Box>
                              </Box>
                            </Box>

                            <Box sx={{display:"flex",flexDirection:"column",}}>
                              <Box sx={{display:"flex", justifyContent:"space-between",
                                mt:{xs:"12px",sm:"0px",md:"16px"},alignItems:"center"}}>
                                  <Typography>Map</Typography>
                                  <i class="bi bi-three-dots-vertical"></i>
                              </Box>
                              <Box sx={{mt:"12px", mb:"12px"}}>
                                <Box component="img" src={MAP} sx={{
                                  width:"100%", height: 150, objectFit:"cover"}}></Box>
                              </Box>
                            </Box>


                          </Box>
                      </Box>
                    </Grid>
                  </Grid>
              </Box>
        </Grid>
      </Grid>

    

{/*main content*/}
    </Box>
  );
}
export default App;
