CREATE TABLE `transaction` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` integer NOT NULL,
	`amount` integer NOT NULL,
	`currency` text(3) NOT NULL,
	`domain_id` integer NOT NULL,
	`buyer_id` integer NOT NULL,
	`seller_id` integer NOT NULL,
	`status` text(32) NOT NULL
);
--> statement-breakpoint
ALTER TABLE domain ADD `last_modified` integer NOT NULL;--> statement-breakpoint
ALTER TABLE domain ADD `views` integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE domain ADD `status` text(32) NOT NULL;