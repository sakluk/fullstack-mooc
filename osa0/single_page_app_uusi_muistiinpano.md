```mermaid
sequenceDiagram
    participant selain
    participant palvelin
    
    selain->>palvelin: spa.js SendToServer lähettää palvelimelle uuden muistiinpanon
    activate palvelin
    palvelin-->>selain: {"message":"note created"}
    deactivate palvelin
```    

