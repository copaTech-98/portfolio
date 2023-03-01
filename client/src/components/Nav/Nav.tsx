import { Box, Button, Link, Typography } from "@mui/material";
import React from "react";

export default function Nav() {
  return (
    <Box width={"100%"}>
      <nav>
        <Box
          width={"100%"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          padding="20px"
        >
          <Typography variant="h5" fontFamily={"Alata"}>
            JHONATAN IÑIGUEZ
          </Typography>
          <Box display={"flex"} gap="60px" alignItems={"center"}>
            <Link>Skills</Link>
            <Link>Resumen</Link>
            <Link>Proyectos</Link>
            <Link>Certificados</Link>
            <Link>
              <Button variant="contained" sx={{ borderRadius: "20px" }}>
                Contacto
              </Button>
            </Link>
          </Box>
        </Box>
      </nav>
    </Box>
  );
}
