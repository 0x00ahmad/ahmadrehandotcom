CREATE TABLE `contact` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`first_name` text(32) NOT NULL,
	`last_name` text(32) NOT NULL,
	`email` text(128) NOT NULL,
	`phone_number` text(32) NOT NULL,
	`message` text DEFAULT '' NOT NULL
);
--> statement-breakpoint
CREATE TABLE `domain` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` integer NOT NULL,
	`name` text(255) NOT NULL,
	`list_price` integer NOT NULL,
	`accepted_price` integer NOT NULL,
	`expires_at` integer NOT NULL,
	`categories` text(255) NOT NULL,
	`seller_id` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `email_list` (
	`email` text(255) PRIMARY KEY NOT NULL,
	`subscribed_at` integer NOT NULL,
	`unsubscribed_at` integer,
	`key` text(20) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`created_at` integer NOT NULL,
	`last_login` integer NOT NULL,
	`username` text(32) NOT NULL,
	`provider` text NOT NULL,
	`provider_id` text(255) NOT NULL,
	`email` text(128) NOT NULL,
	`user_type` integer DEFAULT 0 NOT NULL,
	`disabled` integer DEFAULT false NOT NULL
);
