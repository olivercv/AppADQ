/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : PostgreSQL
 Source Server Version : 110008
 Source Host           : localhost:5432
 Source Catalog        : EA_ADQ
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 110008
 File Encoding         : 65001

 Date: 25/08/2020 19:47:59
*/


-- ----------------------------
-- Table structure for confirmForms
-- ----------------------------
DROP TABLE IF EXISTS "public"."confirmForms";
CREATE TABLE "public"."confirmForms" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "userId" uuid NOT NULL,
  "dateAt" timestamp(6),
  "observation" varchar(500) COLLATE "pg_catalog"."default",
  "refuse" bool,
  "codeRequest" uuid
)
;
ALTER TABLE "public"."confirmForms" OWNER TO "postgres";

-- ----------------------------
-- Primary Key structure for table confirmForms
-- ----------------------------
ALTER TABLE "public"."confirmForms" ADD CONSTRAINT "confirm_pkey" PRIMARY KEY ("id");
