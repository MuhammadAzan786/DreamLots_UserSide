import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import React from "react";
import ColorText from "./ColorText";

const ChannelAnalyticsCard = (props) => {
  return (
    <>
      <Card {...props}>
        <CardContent>
          <Typography variant="cardTitle">WebSite Analytics</Typography>
          <Box>
            <Typography variant="h6" sx={styles.analyticsSubs}>
              Current Users
            </Typography>
            <Typography variant="h3">4,144</Typography>
            <Typography variant="body2" sx={styles.analyticspercent}>
              <ColorText color={"green.main"}>+77</ColorText> in last 28 days
            </Typography>
          </Box>
          <Divider />
          <Typography variant="h5" sx={styles.analyticsSubHead}>
            Summary
          </Typography>
          <Typography variant="h7" sx={styles.analyticsSubHead2}>
            Last 28 days
          </Typography>
          <Box>
            <Box sx={styles.LatestVideoStatsRows}>
              <Typography variant="h7">Views</Typography>
              <Typography variant="h7">225</Typography>
            </Box>
            <Divider />
            <Box sx={styles.LatestVideoStatsRows}>
              <Typography variant="h7">Estimated Revenue</Typography>
              <Typography variant="h7">$450.00</Typography>
            </Box>
            <Divider />
          </Box>
          <Typography variant="h5" sx={styles.analyticsSubHead}>
            Top Posts
          </Typography>
          <Typography variant="h7" sx={styles.analyticsSubHead2}>
            Last 48 hours . Views
          </Typography>
          <Box>
            <Box sx={styles.analyticsVideoStats}>
              <Typography variant="h7">Lorem ipsum dolor sit amet.</Typography>
              <Typography variant="h7">245</Typography>
            </Box>

            <Box sx={styles.analyticsVideoStats}>
              <Typography variant="h7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, assumenda!
              </Typography>
              <Typography variant="h7">525</Typography>
            </Box>

            <Box sx={styles.analyticsVideoStats}>
              <Typography variant="h7">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </Typography>
              <Typography variant="h7">25</Typography>
            </Box>
          </Box>
          <Typography variant="link" sx={styles.analyticslink}>
            GO TO POST ANALYTICS
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

/**@type{import("@mui/material").SxProps} */

const styles = {
  analyticsSubs: {
    color: "neutral.normal",
    my: 1,
  },
  analyticspercent: {
    color: "neutral.normal",
    my: 1,
  },
  LatestVideoStatsRows: {
    display: "flex",
    justifyContent: "space-between",
    mt: 2,
    mb: 1,
  },
  analyticsSubHead: {
    mt: 2,
  },
  analyticsSubHead2: {
    color: "neutral.normal",
  },
  analyticsVideoStats: {
    display: "flex",
    justifyContent: "space-between",
    mt: 2,
    mb: 1,
    fontWeight: 500,
    "&:hover": {
      color: "primary.main",
      cursor: "pointer",
    },
  },
  analyticslink: {
    mt: 2,
  },
};
export default ChannelAnalyticsCard;
