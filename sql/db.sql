INSERT INTO office(name, id_company, id_sup_office)
    VALUES('Finanzas','94ea5435-195b-423d-873e-c1308d649800','');

INSERT INTO position(id_office, name, active)
    VALUES('95c5599d-5b52-4f6c-81d4-0b3840735f47','profesional junior');


INSERT INTO users(name, lastname, email, password, role, id_position)
    VALUES('Alejandro','Granado','test@gmail.com','1234567','ADMIN','6a39f196-3f89-4685-86c5-83a7c9b17c99');