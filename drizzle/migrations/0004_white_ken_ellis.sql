CREATE TABLE `address` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer NOT NULL,
	`address1` text(255) NOT NULL,
	`address2` text(255),
	`city` text(64) NOT NULL,
	`country` text(64) NOT NULL,
	`postal_code` text(16) NOT NULL,
	`state` text(64) NOT NULL
);
--> statement-breakpoint
ALTER TABLE domain ADD `deleted_at` integer;