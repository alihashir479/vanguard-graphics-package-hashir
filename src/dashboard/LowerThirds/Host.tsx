import { Button, TextField, Paper, Box } from "@mui/material"
import { LOWERTHIRDS_HOST } from "../../common/replicants"

import React from "react"
import { LowerThird } from "../../@types/replicants"
import { useReplicantValue } from "../../common/hooks/useReplicant"

function Host() {
    const [host, setHost] = useReplicantValue<LowerThird>(LOWERTHIRDS_HOST.NAME, LOWERTHIRDS_HOST.NAME_SPACE)

    const toggleLowerThird = async () => {
        try {
            const response = await fetch("/api/toggleL3", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(host)
            });

            if (!response.ok) {
              throw new Error('Error updating graphics state');
            }

            setHost({
              ...host,
              graphics: {
                ...host?.graphics,
                isShowing: !host?.graphics?.isShowing,
              },
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Paper sx={{ p: 2, mb: 1 }} elevation={0}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <TextField
                        sx={{ mr: 1 }}
                        label="First Name"
                        value={host?.value?.nameFirst || ""}
                        onChange={(e) => {
                          setHost({
                            ...host,
                            value: {
                              ...host?.value,
                              nameFirst: e.target.value,
                            },
                          });
                        }}
                        size="small"
                        type="text"
                    />
                    <TextField
                        sx={{ mr: 1 }}
                        label="Last Name"
                        value={host?.value?.nameLast || ""}
                        onChange={(e) => {
                          setHost({
                            ...host,
                            value: {
                              ...host?.value,
                              nameLast: e.target.value,
                            },
                          });
                        }}
                        size="small"
                        type="text"
                    />
                    <TextField
                        sx={{ mr: 1 }}
                        label="socialmedia"
                        value={host?.value?.socialmedia || ""}
                        onChange={(e) => {
                          setHost({
                            ...host,
                            value: {
                             ...host?.value,
                              socialmedia: e.target.value,
                            },
                          });
                        }}
                        size="small"
                        type="text"
                    />
                    <Button
                        color={host?.graphics?.isShowing ? "error" : "primary"}
                        variant="contained"
                        disableElevation
                        onClick={toggleLowerThird}
                    >
                        {host?.graphics?.isShowing ? "Hide" : "Show"}
                    </Button>
                </Box>
            </Paper>
        </>
    )
}
export default Host
