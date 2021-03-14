# Api-Key Tresor (short AKT)

This project is a proof-of-concept. 
`Schema.yaml` holds an example file for AKT.

## Load configuration

Service needs an schema yaml file, which holds the configuration.

File-based
```bash
akt --file schema.yaml
```

URL-based
```bash
akt --url https://localhost/schema.yaml
```

Environment-Variable-based for URL-based approach
```bash
akt --env-var AKT_SCHEMA_URL
```

AKT loads the schema from given value in env-var.